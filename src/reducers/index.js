import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import message from './messages';
import reports from './reports';

const rootReducer = combineReducers({
  auth, login, message, reports,
});

export default rootReducer;
