import createReducer from 'lib/createReducer';

//import Immutable from 'immutable';

import * as types from 'constants/ActionTypes';

const initialState = {
  todos: [{ text: 'Initial Todo', isCompleted: false }],
  toggleAllCompleted: true
};

export default createReducer(initialState, {
  [types.ADD_TODO](state, {}) {
    const nextState = state;
    return nextState;
  }
});
