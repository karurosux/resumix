import defaultState from '../default-state';

export default function userReducer(state, action) {
  switch (action.type) {
    default:
      return state || defaultState.user;
  }
}
