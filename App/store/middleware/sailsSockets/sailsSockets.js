import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';
import { setIsServiceAssigned, setRequestedService } from '../../actions/services';
import { setAssignedEmployee } from '../../actions/employee';
import CONSTANTS from '../../../constants/index';

const socketMidleware = () => {
  let socket = null;
  let roomNames = [];
  const io = sailsIOClient(socketIOClient);
  io.sails.useCORSRouteToGetCookie = false;
  io.sails.url = CONSTANTS.HOST;
  socket = io.sails.connect(CONSTANTS.HOST);

  const onSetServiceAssigned = store => {
    store.dispatch(setIsServiceAssigned(true));
  };

  const onSetAssignedEmployee = (store, data) => {
    store.dispatch(setAssignedEmployee(data));
  };

  const onSetRequestedService = (store, data) => {
    let service = data.servicioUpdate[0];
    store.dispatch(setRequestedService(service));
  };

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
        socket.post(
          // /empresa/subscribe?nombreSala=sexSala
          CONSTANTS.HOST + '/socket/enviar-broadcast',
          auxData,
          resData => {
            console.log('enviando mensaje desde app', resData);
          },
        );
      case 'UPDATE_SERVICE_STATUS_SOCKET':
        const auxDataUpdate = {
          idService: action.idService,
          state: action.state,
          roomName: action.roomName,
          eventName: action.eventName,
          data: '',
        };
        socket.patch(
          // /empresa/subscribe?nombreSala=sexSala
          CONSTANTS.HOST + '/servicio/cancel',
          auxDataUpdate,
          resData => {
            console.log('actualizando el estatus del servicio a cancelado', resData);
          },
        );
      case 'LISTEN_MESSAGE':
        event = action.eventName;
        socket.on(event, data => {
          onSetServiceAssigned(store);
          onSetAssignedEmployee(store, data);
          onSetRequestedService(store, data);
        });
      default:
        next(action);
    }
  };
};

export default socketMidleware();
