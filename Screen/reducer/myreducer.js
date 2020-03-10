import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Ali',
    'Affanr',
    'sir Haider',
  ],
};

const demoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  demo: demoReducer,
});