import 'babel-core/polyfill';

export default function reduceFn(ActionMap, initialState, state, action) {
	state === undefined ? state = initialState : null;
  const reducer = ActionMap[action.type];
  if (typeof reducer === 'undefined') return state;
  return Object.assign({}, state, reducer(state, action));
}