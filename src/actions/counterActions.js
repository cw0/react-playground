import * as types from '../constants/actionTypes';

export function incrementCounter(counter) {
   
        return {
            type: types.INCREMENT_COUNTER,
            counter
        };
    
}