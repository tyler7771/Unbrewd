export const FETCH_DRINKS = "FETCH_DRINKS";
export const FETCH_DRINK = "FETCH_DRINK";
export const RECEIVE_ALL_DRINKS = "RECEIVE_ALL_DRINKS";
export const RECEIVE_DRINK = "RECEIVE_DRINK";
export const REMOVE_DRINK = "REMOVE_DRINK";
export const CREATE_DRINK = "CREATE_DRINK";
export const UPDATE_DRINK = "UPDATE_DRINK";
export const DELETE_DRINK = "DELETE_DRINK";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchDrinks = () => ({
  type: FETCH_DRINKS
});

export const fetchDrink = (id) => ({
  type: FETCH_DRINK,
  id
});

export const createDrink = (drink) => ({
  type: CREATE_DRINK,
  drink
});

export const updateDrink = (drink) => ({
  type: UPDATE_DRINK,
  drink
});

export const deleteDrink = (id) => ({
  type: DELETE_DRINK,
  id
});

export const receiveAllDrinks = (drinks) => ({
  type: RECEIVE_ALL_DRINKS,
  drinks
});

export const receiveDrink = (drink) => ({
  type: RECEIVE_DRINK,
  drink
});

export const removeDrink = (drink) => ({
  type: REMOVE_DRINK,
  drink
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
