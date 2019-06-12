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
        let morelist = state.get('homeList').concat(fromJS(action.morelist));
        return state.merge({
            homeList:morelist,
            articlePage:action.nextPage
        })
    default:
      return state;
  }
};
