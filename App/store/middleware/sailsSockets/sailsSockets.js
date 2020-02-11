import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';
import { setIsServiceAssigned } from '../../actions/services';
import CONSTANTS from '../../../constants/index';

const socketMidleware = () => {
  let socket = null;
  let roomNames = [];
  const io = sailsIOClient(socketIOClient);
  io.sails.useCORSRouteToGetCookie = false;
  io.sails.url = CONSTANTS.HOST;
  socket = io.sails.connect(CONSTANTS.HOST);

  return store => next => action => {
    switch (action.type) {
      case 'CONNECT_TO_ROOM':
        if (roomNames.length > 0) {
          for (let i = 0; i < roomNames.length; i++) {
            if (roomNames[i] === action.roomName) {
              return;
            }
          }
        }
        roomNames.push(action.roomName);
        console.log('conectar a sala');
        nombreSala = action.roomName;
        socket.get(CONSTANTS.HOST + '/empresa/subscribe?nombreSala=' + nombreSala, resData => {
          console.log('uniendo sala', resData);
        });
        break;
      case 'SEND_MESSAGE_TO_ROOM':
        const auxData = {
          nombreSala: 'sala1',
          data: 'prueba desde app',
        };
        console.log('enviar mensaje prueba');
        socket.post(
          // /empresa/subscribe?nombreSala=sexSala
          CONSTANTS.HOST + '/socket/enviar-broadcast',
          auxData,
          resData => {
            console.log('enviando mensaje desde app', resData);
          },
        );
      case 'LISTEN_MESSAGE':
        console.log('listening for messages');
        console.log(action.eventName);
        event = action.eventName;
        socket.on(event, data => {
          console.log('me llega info desde evento servicio asignado', data);
          next(setIsServiceAssigned(true));
          //onSetServiceAssigned(store);
        });
      default:
        next(action);
    }
  };
};

export default socketMidleware();
