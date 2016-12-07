export const FETCH_ROASTERS = "FETCH_ROASTERS";
export const FETCH_ROASTER = "FETCH_ROASTER";
export const RECEIVE_ALL_ROASTERS = "RECEIVE_ALL_ROASTERS";
export const RECEIVE_ROASTER = "RECEIVE_ROASTER";
export const CREATE_ROASTER = "CREATE_ROASTER";

export const fetchRoasters = () => ({
  type: FETCH_ROASTERS
});

export const fetchRoaster = (id) => ({
  type: FETCH_ROASTER,
  id
});

export const createRoaster = (roaster) => ({
  type: CREATE_ROASTER,
  roaster
});

export const receiveAllRoasters = (roasters) => ({
  type: RECEIVE_ALL_ROASTERS,
  roasters
});

export const receiveRoaster = (roaster) => ({
  type: RECEIVE_ROASTER,
  roaster
});
