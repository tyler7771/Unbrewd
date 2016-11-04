import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import DrinkReducer from './drink_reducer';
import RoasterReducer from './roaster_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  drink: DrinkReducer,
  roaster: RoasterReducer
});

export default RootReducer;
