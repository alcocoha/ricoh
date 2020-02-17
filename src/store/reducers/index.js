import { combineReducers } from 'redux';
import productsReducer from '../reducers/productsReducer';

export default combineReducers({
    products : productsReducer
});
