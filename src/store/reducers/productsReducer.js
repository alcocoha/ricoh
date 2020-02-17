import { PRODUCTS } from '../../constants/reduxTypes';

export default ( state = {}, action = {} ) => {

    if( !state ) return null;

    let newState = state;
    const { type, payload } = action;

    if( type === PRODUCTS.ADD_PRODUCT ){
        newState = { data: [ ...state.data, payload ] }
    } else if( type === PRODUCTS.ADD_FIRST_PRODUCT ){
        newState = { ...state, data: payload };
    }

    return newState
}
