import { CREATE_USER } from '../constants/ActionTypes';
import reduceFn from '../lib/reduceFn';

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

export default reduceFn.bind(this, ActionMap, initialState);
