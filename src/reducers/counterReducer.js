import {INCREMENT_COUNTER} from '../constants/actionTypes';
import initialState from './initialState';

export default function counterReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case INCREMENT_COUNTER:
            return Object.assign({}, state, {
                counter: action.counter + 1
            });
        default:
            return state;
    }
}