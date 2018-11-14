import defaultState from '../default-state';

export default function skillsReducer(state, action) {
  switch (action.type) {
    default:
      return state || defaultState.skills;
  }
}
