import * as types from '../constants/actionTypes';

export function incrementCounter() {
    return {
        type: types.INCREMENT_COUNTER,
    };    
}