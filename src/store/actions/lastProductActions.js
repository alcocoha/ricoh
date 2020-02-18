import { PRODUCTS } from '../../constants/reduxTypes';

export const addLastProductAction = payload => ({ type: PRODUCTS.LAST_PRODUCT_ADD, payload });
