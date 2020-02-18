import { GET, POST } from './config';

const API_URL = 'https://www.mocky.io/v2/';

const REST_API = async ( endPoint, verb ) => {
    try {
        const respond = await fetch( `${API_URL}${endPoint}`, verb );
        if( respond.status === 404 || respond.status === 500 )  throw new Error( "Not 200 response" );
        return respond.json();
    } catch (error) {
        console.log('error');
    }
};

export const getData = endPoint => REST_API( endPoint, GET );

export const postData = ( endPoint, params ) => REST_API( endPoint, POST( params ) );