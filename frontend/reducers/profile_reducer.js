import { RECEIVE_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';

const _default = {
    profile: {},
    errors: []
};

const ProfileReducer = (oldState = _default, action) => {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return merge({}, oldState, {profile: action.profile, errors: []});
    default:
      return oldState;
  }
};

export default ProfileReducer;
