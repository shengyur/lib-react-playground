import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

//改成immutable类型的数据
const defaultState = fromJS({
  showToTop: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};
