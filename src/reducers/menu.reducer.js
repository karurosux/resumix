import defaultState from '../default-state';

export default function menuReducer(state, action) {
  switch (action.type) {
    default:
      return state || defaultState.menu;
  }
}
