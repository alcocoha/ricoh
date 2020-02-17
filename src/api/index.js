import { GET, POST } from './config';

const API_URL = 'http://www.mocky.io/v2/';

const REST_API = async ( endPoint, verb ) => {
    const respond = await fetch( `${API_URL}${endPoint}`, verb );
    if( respond.status === 404 || respond.status === 500 )  throw new Error( "Not 200 response" );
    return respond.json();
};

export const getData = endPoint => REST_API( endPoint, GET );

export const postData = ( endPoint, params ) => REST_API( endPoint, POST( params ) );