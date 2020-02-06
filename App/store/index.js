import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const logger = createLogger({
	predicate: (getState, action) => __DEV__
})

export default createStore(rootReducer, applyMiddleware(thunk, logger));
