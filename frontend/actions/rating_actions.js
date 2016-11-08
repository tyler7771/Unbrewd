export const FETCH_RATINGS = "FETCH_RATINGS";
export const FETCH_RATING = "FETCH_RATING";
export const RECEIVE_ALL_RATINGS = "RECEIVE_ALL_RATINGS";
export const RECEIVE_RATING = "RECEIVE_RATING";
export const REMOVE_RATING = "REMOVE_RATING";
export const CREATE_RATING = "CREATE_RATING";
export const UPDATE_RATING = "UPDATE_RATING";
export const DELETE_RATING = "DELETE_RATING";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchRatings = () => ({
  type: FETCH_RATINGS
});

export const fetchRating = (id) => ({
  type: FETCH_RATING,
  id
});

export const createRating = (rating) => ({
  type: CREATE_RATING,
  rating
});

export const updateRating = (rating) => ({
  type: UPDATE_RATING,
  rating
});

export const deleteRating = (id) => ({
  type: DELETE_RATING,
  id
});

export const receiveAllRatings = (ratings) => ({
  type: RECEIVE_ALL_RATINGS,
  ratings
});

export const receiveRating = (rating) => ({
  type: RECEIVE_RATING,
  rating
});

export const removeRating = (rating) => ({
  type: REMOVE_RATING,
  rating
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
