import { ERROR_MESSAGE, HIDE_MESSAGE } from '../constants/ActionTypes';
import reduceFn from '../lib/reduceFn';

const initialState = {
  message: 'error'
}

const ActionMap = {
  [ERROR_MESSAGE]: (state, action) => ({ message: action.message }),
  [HIDE_MESSAGE]: (state, action) => ({ message: '' })
};

export default reduceFn.bind(this, ActionMap, initialState);

