import defaultState from '../default-state';

export default function jobHistoryReducer(state, action) {
  switch (action.type) {
    default:
      return state || defaultState.jobHistory;
  }
}
