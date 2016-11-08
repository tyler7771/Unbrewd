import {
  receiveRating,
  receiveAllRatings,
  removeRating,
  FETCH_RATINGS,
  FETCH_RATING,
  CREATE_RATING,
  UPDATE_RATING,
  DELETE_RATING,
  receiveErrors
} from '../actions/rating_actions';

import {
  createRating,
  deleteRating,
  updateRating,
  fetchRatings,
  fetchRating
} from '../util/rating_api_util';
import { hashHistory } from 'react-router';

const RatingsMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let fetchAllRatingsSuccess = ratings => dispatch(receiveAllRatings(ratings));
  let fetchRatingSuccess = rating => dispatch(receiveRating(rating));
  let createRatingSuccess = rating => {
    dispatch(receiveRating(rating));
    // hashHistory.push(`/coffee/rating/${Object.keys(rating)[0]}`);
  };
  let removeRatingSuccess = id => {
    // hashHistory.push("/coffee");
    dispatch(removeRating(id));
  };

  switch (action.type) {
    case FETCH_RATINGS:
      debugger
      fetchRatings(fetchAllRatingsSuccess);
      return next(action);
    case FETCH_RATING:
      fetchRating(action.id, fetchRatingSuccess);
      return next(action);
    case CREATE_RATING:
      createRating(action.rating, createRatingSuccess, errorCallback);
      return next(action);
    case UPDATE_RATING:
      updateRating(action.rating, fetchRatingSuccess);
      return next(action);
    case DELETE_RATING:
      deleteRating(action.id, removeRatingSuccess);
      return next(action);
    default:
      next(action);
  }
};

export default RatingsMiddleware;
