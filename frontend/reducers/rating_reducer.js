import { RECEIVE_ALL_RATINGS,
         RECEIVE_RATING,
         REMOVE_RATING,
         RECEIVE_ERRORS } from '../actions/rating_actions';
import merge from 'lodash/merge';
import _ from 'lodash';

const _default = {
    errors: []
};

const DrinksReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_RATINGS:
      return action.ratings;
    case RECEIVE_RATING:
      return merge([], oldState, action.rating);
    case REMOVE_RATING:
      let newState = merge([], oldState);
      for (let i = 0; i < newState.length; i++) {
        if (newState[i] === undefined) {continue;}
        else if  (newState[i].id === action.rating.id) {
          newState.splice(i, 1);
        }
      }
      return newState;
    case RECEIVE_ERRORS:
      return merge([], oldState, action.errors);
    default:
      return oldState;
  }
};

export default DrinksReducer;
