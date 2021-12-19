import { combineReducers } from 'redux';
import { cart } from './cart';
import { fruits } from './fruits';
import { paginate } from './paginate';

export const rootReducer = combineReducers({
  cart,
  fruits,
  paginate,
});
