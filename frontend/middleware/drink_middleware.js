import {
  receiveDrink,
  receiveAllDrinks,
  removeDrink,
  FETCH_DRINKS,
  FETCH_DRINK,
  CREATE_DRINK,
  UPDATE_DRINK,
  DELETE_DRINK,
  receiveErrors
} from '../actions/drink_actions';

import {
  createDrink,
  deleteDrink,
  updateDrink,
  fetchDrinks,
  fetchDrink
} from '../util/drink_api_util';
import { hashHistory } from 'react-router';

const DrinksMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let fetchAllDrinksSuccess = drinks => dispatch(receiveAllDrinks(drinks));
  let fetchDrinkSuccess = drink => dispatch(receiveDrink(drink));
  let createDrinkSuccess = drink => {
    dispatch(receiveDrink(drink));
    hashHistory.push(`/coffee/${Object.keys(drink)[0]}`);
  };
  let removeDrinkSuccess = id => {
    hashHistory.push("/coffee");
    dispatch(removeDrink(id));
  };

  switch (action.type) {
    case FETCH_DRINKS:
      fetchDrinks(fetchAllDrinksSuccess);
      return next(action);
    case FETCH_DRINK:
      // debugger
      fetchDrink(action.params, fetchDrinkSuccess);
      return next(action);
    case CREATE_DRINK:
      createDrink(action.drink, createDrinkSuccess, errorCallback);
      return next(action);
    case UPDATE_DRINK:
      updateDrink(action.drink, fetchDrinkSuccess);
      return next(action);
    case DELETE_DRINK:
      deleteDrink(action.id, removeDrinkSuccess);
      return next(action);
    default:
      next(action);
  }
};

export default DrinksMiddleware;
