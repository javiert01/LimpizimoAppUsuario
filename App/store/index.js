import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import socketMidleware from './middleware/sailsSockets/sailsSockets'
import rootReducer from './reducers/rootReducer';

const middleware = [thunk, socketMidleware];
export default createStore(rootReducer, applyMiddleware(...middleware));
