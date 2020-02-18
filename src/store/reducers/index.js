import { combineReducers } from 'redux';
import productsReducer from '../reducers/productsReducer';
import languageReducer from '../reducers/languageReducer';
import lastProductReducer from '../reducers/lastProductReducer';

export default combineReducers({
    products : productsReducer,
    language : languageReducer,
    lastProduct: lastProductReducer
});
