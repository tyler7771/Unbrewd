import { RECEIVE_ALL_ROASTERS,
         RECEIVE_ROASTER } from '../actions/roaster_actions';
import merge from 'lodash/merge';

const DrinksReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_ROASTERS:
      return merge({}, action.roasters);
    case RECEIVE_ROASTER:
      return merge({}, oldState, {[action.roaster.id]: action.roaster});
    default:
      return oldState;
  }
};

export default DrinksReducer;
