import { USER_LOGGED_OUT, TOGGLE_LOGIN, USER_LOGGED_IN, CHECK_LOGIN, ERROR_MESSAGE, HIDE_MESSAGE } from '../constants/ActionTypes';

import auth from '../lib/auth';

export function logout() {
  auth.logout();
  return {
    type: USER_LOGGED_OUT,
  };
}

export function dismiss() {
  return {
    type: HIDE_MESSAGE,
  };
}

export function routeLocationDidUpdate(location) {
  return {
    type: LOCATION_CHANGED,
    location,
  };
}

export function toggleLogin() {
  return {
    type: TOGGLE_LOGIN,
  };
}


export function subscribe(user) {
  return {
    type: CREATE_USER,
    user,
  };
}

export function loginAction(email, pass) {
  return dispatch => {
    auth.login(email, pass, res => {
      if (res) {
        dispatch({
          type: USER_LOGGED_IN,
          token: localStorage.token,
        });
      } else {
        dispatch({
          type: ERROR_MESSAGE,
          message: 'Usuario ou senha incorretos',
        });
        setTimeout(()=>dispatch({type: HIDE_MESSAGE}), 4000);
      }
    });
  };
}

export function checkLogin() {
  return {
    type: CHECK_LOGIN,
  };
}
