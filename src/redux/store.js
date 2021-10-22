import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coinsReduer from './reducers/coinsReducer';

const store = createStore(coinsReduer, applyMiddleware(thunk, logger));

export default store;
