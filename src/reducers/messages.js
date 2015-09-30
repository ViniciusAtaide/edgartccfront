import { ERROR_MESSAGE, HIDE_MESSAGE } from '../constants/ActionTypes';
import reduceFn from '../lib/reduceFn';

const initialState = null;

const ActionMap = {
  [ERROR_MESSAGE]: (state, action) => action.message,
  [HIDE_MESSAGE]: (state, action) => null
};

export default reduceFn.bind(this, ActionMap, initialState);
