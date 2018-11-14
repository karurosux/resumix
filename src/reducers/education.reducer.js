import defaultState from '../default-state';

export default function educationReducer(state, action) {
  switch (action.type) {
    default:
      return state || defaultState.education;
  }
}
