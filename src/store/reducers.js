import { INPUT_FOCUSED, INPUT_NOT_FOCUSED } from "./actionTypes";

const defaultState = {
  foused: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_FOCUSED:
      return Object.assign({}, state, {
        foused: true
      });
    case INPUT_NOT_FOCUSED:
      return Object.assign({}, state, {
        foused: false
      });
    default:
      return state;
  }
};
