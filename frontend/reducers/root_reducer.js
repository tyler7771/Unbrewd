import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import DrinkReducer from './drink_reducer';
import RoasterReducer from './roaster_reducer';
import RatingReducer from './rating_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  drink: DrinkReducer,
  roaster: RoasterReducer,
  rating: RatingReducer
});

export default RootReducer;
