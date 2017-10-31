import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import counterReducer from './counterReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  counterReducer,
  routing: routerReducer
});

export default rootReducer;
