import {
  receiveRoaster,
  receiveAllRoasters,
  FETCH_DRINKS,
  FETCH_DRINK,
  CREATE_DRINK,
} from '../actions/roaster_actions';

import {
  createRoaster,
  fetchRoasters,
  fetchRoaster
} from '../util/roaster_api_util';
import { hashHistory } from 'react-router';

const RoastersMiddleware = ({ getState, dispatch }) => next => action => {
  let error = e => console.log(e.responseJSON);
  let fetchAllRoastersSuccess = roasters => dispatch(receiveAllRoasters(roasters));
  let fetchRoasterSuccess = roaster => dispatch(receiveRoaster(roaster));

  switch (action.type) {
    case FETCH_DRINKS:
      fetchRoasters(fetchAllRoastersSuccess);
    case FETCH_DRINK:
      fetchRoaster(action.id, fetchRoasterSuccess);
    case CREATE_DRINK:
      createRoaster(action.roaster, fetchRoasterSuccess);
    default:
      next(action);
  }
};

export default RoastersMiddleware;
