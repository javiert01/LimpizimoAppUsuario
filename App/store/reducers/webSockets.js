/* import {
    SEND_MESSAGE_ROOM,
    CONNECT_TO_ROOM
} from '../actions/actionTypes'
import {CONSTANTS} from '../../constants/index'


const createMySocketMiddleware = (url) => {
    return storeAPI => {
        const socketIOClient = require("socket.io-client");
        const sailsIOClient = require("sails.io.js");
        const io = sailsIOClient(socketIOClient);
        io.sails.useCORSRouteToGetCookie = false;
        io.sails.url = CONSTANTS.HOST;
        let socket = createMyWebsocket(url);

        socket.on("message", (message) => {
            storeAPI.dispatch({
                type : "SOCKET_MESSAGE_RECEIVED",
                payload : message
            });
        });

        return next => action => {
            if(action.type == "SEND_WEBSOCKET_MESSAGE") {
                socket.send(action.payload);
                return;
            }

            return next(action);
        }
    }
}*/