import { CREATE_USER } from '../constants/ActionTypes';
import merge from 'object-merge';

const initialState = [{
  login: "Vinny",
  id: 1,
  password: "123"
},{
  login: "Edgar",
  id: 2,
  password: "345"
}];

const ActionMap = {
  [CREATE_USER]: (state, action) => {
    let user = action.user;
    return {...user};
  }
};

export default function (state = initialState, action = null) {
  const reduceFn = ActionsMap[action.type];
  if (typeof reduceFn === 'undefined') return state;
  return merge({}, state, reduceFn(state, action));
}