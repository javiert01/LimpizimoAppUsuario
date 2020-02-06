import {connectToRoom, sendMessageToRoom, setIsServiceAssigned} from '../../actions/index'
import CONSTANTS from '../../../constants/index'

const socketMidleware = () => {
    
    let socket = null;
    const socketIOClient = require("socket.io-client");
    const sailsIOClient = require("sails.io.js");
    const io = sailsIOClient(socketIOClient);
    
    const onSetServiceAssigned = store => () => {
        console.log('seteando el servicio');
        store.dispatch(setIsServiceAssigned(true));
    }

    return store => next => action => {
        switch(action.type) {
            case 'CONNECT_TO_ROOM':
                if(socket !== null) {
                    //socket.close();
                    return;
                }
                console.log('conectar a sala');
                io.sails.useCORSRouteToGetCookie = false;
                io.sails.url = CONSTANTS.HOST;
                socket = io.sails.connect(action.host);
                nombreSala = 'sala1';
                socket.get(CONSTANTS.HOST + '/empresa/subscribe?nombreSala=' + nombreSala, (resData) => {
                    console.log('uniendo sala', resData);
                  });
                break;
            case 'SEND_MESSAGE_TO_ROOM':
                const auxData = {
                    nombreSala: 'sala1',
                    data: 'prueba desde app'
                };
                console.log('enviar mensaje prueba');
                socket.post(
                    // /empresa/subscribe?nombreSala=sexSala
                    CONSTANTS.HOST + '/socket/enviar-broadcast', auxData,
                    (resData) => {
                      console.log('enviando mensaje desde app', resData);
                    }
                  );
            case 'LISTEN_MESSAGE':
                console.log('listening for messages');
                socket.on("msm", data => {
                    console.log(data);
                    next(setIsServiceAssigned(true));
                    //onSetServiceAssigned(store);
                });
            default: 
        }
    }
};

export default socketMidleware();