const APPLICATION = 'application/json';

const headers = {
    'Accept'       : APPLICATION,
    'Content-Type' : APPLICATION,
    // 'VersionDate'   : version,
    // 'Authorization' : token,
}

export const GET = () => ({
    method : 'GET',
    headers,
    mode   : 'cors',
})

export const POST = ( body = {} ) => ({
    method : 'POST',
    headers,
    mode   : 'cors',
    body   : JSON.stringify(body)
})

export const DELETE = ( body = {} ) => ({
    method : 'DELETE',
    headers,
    mode   : 'cors',
    body   : JSON.stringify(body)
})

export const PUT = ( body = {} ) => ({
    method : 'PUT',
    headers,
    mode   : 'cors',
    body   : JSON.stringify(body)
})
