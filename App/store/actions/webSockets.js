import { CONNECT_TO_ROOM, SEND_MESSAGE_TO_ROOM, LISTEN_MESSAGE } from './actionTypes';

export const connectToRoom = roomName => ({ type: CONNECT_TO_ROOM, roomName: roomName });

export const sendMessageToRoom = (roomName, message) => ({ type: SEND_MESSAGE_TO_ROOM, roomName: roomName, message: message });

export const listenMessage = eventName => ({ type: LISTEN_MESSAGE, eventName: eventName });
