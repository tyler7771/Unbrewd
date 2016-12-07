export const FETCH_PROFILE = "FETCH_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const fetchProfile = (params) => ({
  type: FETCH_PROFILE,
  params
});

export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  profile
});

export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});
