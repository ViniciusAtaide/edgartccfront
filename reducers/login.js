import { TOGGLE_LOGIN } from '../constants/ActionTypes';
import merge from 'object-merge';


const initialState = {
  subscribe: false
};

const ActionsMap = {
  [TOGGLE_LOGIN]: (state, action) => ({subscribe: !state.subscribe})
};

export default function login(state = initialState, action = null) {
  const reduceFn = ActionsMap[action.type];
  if (typeof reduceFn === 'undefined') return state;
  return merge(state, reduceFn(state, action));
}