import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import counter from './counterReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  counter,
  routing: routerReducer
});

export default rootReducer;
