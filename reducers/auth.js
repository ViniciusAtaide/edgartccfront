import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants/ActionTypes';
import reduceFn from '../lib/reduceFn'; 

const initialState = {
  currentUser: null
};

const ActionMap = {
  [USER_LOGGED_IN]: (state, action) => ({ currentUser: action.token }),
  [USER_LOGGED_OUT]: (state, action) => ({ currentUser: ''})
};

export default reduceFn.bind(this, ActionMap, initialState);
