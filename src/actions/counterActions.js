import * as types from '../constants/actionTypes';

export function incrementCounter(counter) {
    return function (dispatch) {
        return dispatch({
            type: types.INCREMENT_COUNTER,
            counter
        });
    };
}