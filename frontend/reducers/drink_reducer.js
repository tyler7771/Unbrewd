import { RECEIVE_ALL_DRINKS,
         RECEIVE_DRINK,
         REMOVE_DRINK } from '../actions/drink_actions';
import merge from 'lodash/merge';

const DrinksReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return merge({}, action.drinks);
    case RECEIVE_DRINK:
      return merge({}, oldState, {[action.drink.id]: action.drink});
    case REMOVE_DRINK:
      let newState = merge({}, oldState);
      delete newState[action.drink.id];
      return newState;
    default:
      return oldState;
  }
};

export default DrinksReducer;
