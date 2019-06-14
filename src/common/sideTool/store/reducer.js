import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

//改成immutable类型的数据
const defaultState = fromJS({
  showScrollToTop: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.PAGE_SCROLL:
      return state.set("showScrollToTop", action.showScroll);
    default:
      return state;
  }
};
