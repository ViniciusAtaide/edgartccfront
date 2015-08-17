import { SUBSCRIBED_USER, TOGGLE_LOGIN, USER_LOGGED_IN, CHECK_LOGIN } from '../constants/ActionTypes';
import auth from '../auth';

export function routeLocationDidUpdate(location) {
  return {
    type: LOCATION_CHANGED,
    location
  };
}


export function toggleLogin() {
  return {
    type: TOGGLE_LOGIN
  }
}


export function subscribe(user) {
  return {
    type: CREATE_USER,
    user
  }
}

export function loginAction(email, pass) {
  return dispatch => {
    auth.login(email, pass, _ => {
      dispatch({
        type: USER_LOGGED_IN,
        token: localStorage.token
      });
    });
  }
}

export function checkLogin() {
  return {
    type: CHECK_LOGIN
  }
}