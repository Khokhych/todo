const initialState = [];

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'TODO_ADD': {
      return [...state, {
        text: action.payload,
        dateСreation: Date.now(),
      }];
    } case 'TODO_UPDATE': {
      const stateN = state.slice();
      stateN[action.payload.i].text = action.payload.value;
      return [...stateN];
    } case 'TODO_DATA': {
      return [...action.payload];
    } case 'TODO_REMOVE': {
      const stateN = state.slice();
      stateN.splice(action.payload, 1);
      return [...stateN];
    } default:
      break;
  }
  return state;
}