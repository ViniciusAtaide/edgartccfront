import { TOGGLE_LOGIN } from '../constants/ActionTypes';
import reduceFn from '../lib/reduceFn';

const initialState = {
  subscribe: false
};

const ActionMap = {
  [TOGGLE_LOGIN]: (state, action) => ({subscribe: !state.subscribe})
};

export default reduceFn.bind(this, ActionMap, initialState);