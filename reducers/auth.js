import { USER_LOGGED_IN } from '../constants/ActionTypes';
import merge from 'object-merge';

const initialState = {
  currentUser: null
};

const ActionsMap = {
  [USER_LOGGED_IN]: (state, action) => ({ currentUser: action.token })
};

export default function auth(state = initialState, action = null) {
  const reduceFn = ActionsMap[action.type];
  if (typeof reduceFn === 'undefined') return state;
  return merge(state, reduceFn(state, action));
}
