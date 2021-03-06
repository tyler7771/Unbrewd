import {
  receiveRoaster,
  receiveAllRoasters,
  FETCH_ROASTERS,
  FETCH_ROASTER,
  CREATE_ROASTER,
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
    case FETCH_ROASTERS:
      fetchRoasters(fetchAllRoastersSuccess);
      return next(action);
    case FETCH_ROASTER:
      fetchRoaster(action.id, fetchRoasterSuccess);
      return next(action);
    case CREATE_ROASTER:
      createRoaster(action.roaster, fetchRoasterSuccess);
      return next(action);
    default:
      next(action);
  }
};

export default RoastersMiddleware;
