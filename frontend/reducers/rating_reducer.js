import { RECEIVE_ALL_RATINGS,
         RECEIVE_RATING,
         REMOVE_RATING,
         RECEIVE_ERRORS } from '../actions/rating_actions';
import merge from 'lodash/merge';

const _default = {
    rating: null,
    errors: []
};

const DrinksReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_RATINGS:
      return action.ratings;
    case RECEIVE_RATING:
      return merge({}, oldState, action.rating);
    case REMOVE_RATING:
      let newState = merge({}, oldState);
      delete newState[action.rating.id];
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    default:
      return oldState;
  }
};

export default DrinksReducer;
