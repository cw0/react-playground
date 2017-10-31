import {INCREMENT_COUNTER} from '../constants/actionTypes';
//import initialState from './initialState';

export default function counterReducer(state = 0, action) {
   
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        default:
            return state;
    }
}