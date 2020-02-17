import { PRODUCTS } from '../../constants/reduxTypes';

export const addProductAction = payload => ({ type: PRODUCTS.ADD_PRODUCT, payload });

export const addFirstProductAction = payload => ({ type: PRODUCTS.ADD_FIRST_PRODUCT, payload });
