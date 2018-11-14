import defaultState from '../default-state';

export default function projectsReducer(state, action) {
  switch (action.type) {
    default:
      return state || defaultState.projects;
  }
}
