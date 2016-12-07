import { RECEIVE_ALL_DRINKS,
         RECEIVE_DRINK,
         REMOVE_DRINK,
         RECEIVE_ERRORS,
          REMOVE_ERRORS} from '../actions/drink_actions';
import merge from 'lodash/merge';

const _default = {
    drink: {},
    errors: []
};

const DrinksReducer = (oldState = _default, action) => {
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return merge({}, oldState, {drink: action.drinks});
    case RECEIVE_DRINK:
      return merge({}, oldState, {drink: action.drink, errors: []});
    case REMOVE_DRINK:
      let newState = merge({}, oldState);
      for(let attr in newState) {
        delete newState[attr][action.drink.id];
      }
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    case REMOVE_ERRORS:
      let removeState = merge({}, oldState);
      removeState.errors = [];
      return removeState;
    default:
      return oldState;
  }
};

export default DrinksReducer;
