import * as ActionTypes from '../constants/actionTypes';
import reducer from './counterReducer';

describe('Reducers::FuelSavings', () => {
    const getInitialState = () => {
        return 0;
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown'};
        const expected = getInitialState();

        expect(reducer(undefined, action)).toEqual(expected);
    });

    it('should handle INCREMENT_COUNTER', () => {
        const action = { type: ActionTypes.INCREMENT_COUNTER };
        const expected = 1;

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle DECREMENT_COUNTER', () => {
        const action = { type: ActionTypes.DECREMENT_COUNTER };
        const expected = -1;

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });
});