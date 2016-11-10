import {
  receiveProfile,
  FETCH_PROFILE,
  UPDATE_PROFILE,
} from '../actions/profile_actions';

import {
  updateProfile,
  fetchProfile
} from '../util/profile_api_util';
import { hashHistory } from 'react-router';

const ProfilesMiddleware = ({ getState, dispatch }) => next => action => {
  let fetchProfileSuccess = profile => dispatch(receiveProfile(profile));

  switch (action.type) {
    case FETCH_PROFILE:
      fetchProfile(action.params, fetchProfileSuccess);
      return next(action);
    case UPDATE_PROFILE:
      updateProfile(action.profile, fetchProfileSuccess);
    default:
      next(action);
  }
};

export default ProfilesMiddleware;
