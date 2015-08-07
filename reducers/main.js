import { ADD_POST, REMOVE_POST } from '../constants/ActionTypes';

const initialState = {
  info: 'abc'
};

export default function blogposts(state = initialState, action) {
  switch (action.type) {
  case ADD_POST:
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      title: action.title,
      intro: action.intro,
      body: action.body
    }, ...state];

  case REMOVE_POST:
    return state.filter(blogpost =>
      blogpost.id !== action.id
    );

  default:
    return state
  }
}
