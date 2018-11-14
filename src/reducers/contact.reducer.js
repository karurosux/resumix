import defaultState from '../default-state';

export default function contactReducer(state, action) {
  switch (action.type) {
    default:
      return state || defaultState.contact;
  }
}
