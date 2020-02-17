import { PRODUCTS } from '../../constants/reduxTypes';
import isEmpty from 'lodash/isEmpty';

export default ( state = {}, action = {} ) => {

    if( !state ) return null;

    let newState = state;
    const { type, payload } = action;

    if( type === PRODUCTS.ADD_PRODUCT ){
        if(isEmpty( state )) {
            newState = { data: [ payload ] }
        } else {
            newState = { data: [ ...state.data, payload ] }
        }
    } else if( type === PRODUCTS.ADD_FIRST_PRODUCT ){
        newState = { ...state, data: payload };
    }

    return newState
}
