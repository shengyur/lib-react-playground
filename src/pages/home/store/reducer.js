import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

//改成immutable类型的数据
const defaultState = fromJS({
  homeList:[],
  recommentList:[],
  recommentWriterList:[],
  articlePage:0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.getHomeData:
        return state.merge({
        homeList:fromJS(action.homeList),
        recommentList:fromJS(action.recommentList),
        recommentWriterList:fromJS(action.recommentWriterList)
        })
    case actionTypes.loadMoreList:
        let gethomelist = state.get('homeList');
        let morelist = gethomelist.concat(fromJS(action.morelist));
        return state.set("homeList",morelist)
    default:
      return state;
  }
};
