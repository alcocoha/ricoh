import { PRODUCTS } from '../../constants/reduxTypes';

export default ( state = {}, action = {} ) => {

    if( !state ) return null;

    let newState = state;
    const { type, payload } = action;

    if( type === PRODUCTS.LAST_PRODUCT_ADD ){
        newState = payload
    }

    return newState
}
