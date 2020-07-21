const initialState = [];

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'TODO_ADD': {
      const stateN = state ? state.slice() : [];
      stateN.push({
        text: action.payload,
        dateСreation: Date.now(),
      });
      return stateN;
    }
    case 'TODO_UPDATE': {
      const stateN = state.slice();
      stateN[action.payload.i].text = action.payload.value;
      return stateN;
    }
    case 'TODO_DATA': {
      return action.payload;
    }
    case 'TODO_REMOVE': {
      const stateN = state.slice();
      stateN.splice(action.payload, 1);
      return stateN;
    }
    default:
      break;
  }
  return state;
}