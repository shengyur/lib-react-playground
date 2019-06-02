import { INPUT_FOCUSED, INPUT_NOT_FOCUSED,GET_HOT_LIST} from "./actionTypes";
import {fromJS} from "immutable"

//改成immutable类型的数据
const defaultState = fromJS({
  focused: false,
  list:[],
  page:1,
  totalPage:1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_FOCUSED:
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused',true)
    case INPUT_NOT_FOCUSED:
      return state.set('focused',false)
    case GET_HOT_LIST:
      return state.set('list',action.data).set('totalPage',action.totalPage)
    default:
      return state;
  }
};
