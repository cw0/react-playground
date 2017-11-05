import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants/actionTypes';
import initialState from './initialState';

export default function counterReducer(state = initialState.counter, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}