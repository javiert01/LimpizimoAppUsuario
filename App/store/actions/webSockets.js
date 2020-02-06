import { CONNECT_TO_ROOM, SEND_MESSAGE_TO_ROOM, LISTEN_MESSAGE } from './actionTypes';

export const connectToRoom = host => {
  return {
    type: CONNECT_TO_ROOM,
    host
  };
};

export const sendMessageToRoom = (roomName, message) => {
  return {
    type: SEND_MESSAGE_TO_ROOM,
    roomName: roomName,
    message: message,
  };
};

export const listenMessage = () => {
  return {
    type: LISTEN_MESSAGE
  };
};