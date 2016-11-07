import { RECEIVE_ALL_DRINKS,
         RECEIVE_DRINK,
         REMOVE_DRINK,
         RECEIVE_ERRORS } from '../actions/drink_actions';
import merge from 'lodash/merge';

const _default = {
    drink: null,
    errors: []
};

const DrinksReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return action.drinks;
    case RECEIVE_DRINK:
      return merge({}, oldState, action.drink);
    case REMOVE_DRINK:
      let newState = merge({}, oldState);
      delete newState[action.drink.id];
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    default:
      return oldState;
  }
};

export default DrinksReducer;
