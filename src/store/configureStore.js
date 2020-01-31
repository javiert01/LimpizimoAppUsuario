import {createStore, combineReducers} from 'redux';
import serviciosReducer from './reducers/servicios';

const rootReducer = combineReducers({
    servicios: serviciosReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;