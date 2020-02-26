import { CONNECT_TO_ROOM, SEND_MESSAGE_TO_ROOM, LISTEN_MESSAGE, UPDATE_SERVICE_STATUS_SOCKET } from './actionTypes';

export const connectToRoom = roomName => ({ type: CONNECT_TO_ROOM, roomName: roomName });

export const sendMessageToRoom = (roomName, message) => ({ type: SEND_MESSAGE_TO_ROOM, roomName: roomName, message: message });

export const listenMessage = eventName => ({ type: LISTEN_MESSAGE, eventName: eventName });

export const updateServiceStatusSocket = (roomName, eventName, idService, state) => ({
  type: UPDATE_SERVICE_STATUS_SOCKET,
  roomName: roomName,
  eventName: eventName,
  idService: idService,
  state: state,
});
