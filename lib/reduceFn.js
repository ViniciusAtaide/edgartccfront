import merge from 'object-merge';

export default function reduceFn(ActionMap, initialState, state, action) {
	state === undefined ? state = initialState : null;
  const reducer = ActionMap[action.type];
  if (typeof reducer === 'undefined') return state;
  return merge(state, reducer(state, action));
}