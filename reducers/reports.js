
const initialState = [
  'abc', 'abe'
];

const ActionsMap = {
  'hello': ((state, action) => "Ola")
};

export default function reports(state = initialState, action = null) {
  const reduceFn = ActionsMap[action.type];
  if (typeof reduceFn === 'undefined') return state;
  return reduceFn(state, action);
}
