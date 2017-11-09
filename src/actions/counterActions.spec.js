import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './counterActions';

describe('Actions', () => {

    it('should create an action to increment counter', () => {
      const actual = ActionCreators.incrementCounter();
      const expected = {
        type: ActionTypes.INCREMENT_COUNTER
      };

      expect(actual).toEqual(expected);
    });

    it('should create an action to decrement counter', () => {
      const actual = ActionCreators.decrementCounter();
      const expected = { 
        type: ActionTypes.DECREMENT_COUNTER
      };

      expect(actual).toEqual(expected);
    });
});