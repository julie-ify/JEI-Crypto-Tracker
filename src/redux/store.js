import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coinsReduer from '../redux/reducers/coinsReducer';

const store = createStore(coinsReduer, applyMiddleware(thunk, logger));

export default store;