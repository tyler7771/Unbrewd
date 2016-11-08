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

export const createRating = (drink) => ({
  type: CREATE_RATING,
  drink
});

export const updateRating = (drink) => ({
  type: UPDATE_RATING,
  drink
});

export const deleteRating = (id) => ({
  type: DELETE_RATING,
  id
});

export const receiveAllRatings = (drinks) => ({
  type: RECEIVE_ALL_RATINGS,
  drinks
});

export const receiveRating = (drink) => ({
  type: RECEIVE_RATING,
  drink
});

export const removeRating = (drink) => ({
  type: REMOVE_RATING,
  drink
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
