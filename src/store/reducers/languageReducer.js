import { LANGUAGE } from '../../constants/reduxTypes';

export default ( state = 'es', action = {} ) => {

    if( !state ) return null;

    let newState = state;
    const { type } = action;

    if( type === LANGUAGE.CHANGE_TO_SPANISH ){
        newState = 'es'
    } else if( type === LANGUAGE.CHANGE_TO_ENGLISH ){
        newState = 'en';
    }

    return newState
}
