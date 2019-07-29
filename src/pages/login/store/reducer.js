import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

//改成immutable类型的数据
const defaultState = fromJS({
    isLogin:false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('isLogin',action.value)
    case actionTypes.CHANGE_LOGOUT:
        console.log("action.value",action.value)
      return state.set('isLogin',action.value)
    default:
      return state;
  }
};
