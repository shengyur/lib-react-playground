import { fromJS } from "immutable";

//改成immutable类型的数据
const defaultState = fromJS({
  homeList:[],
  recommentList:[],
  recommentWriterList:[]
});

export default (state = defaultState, action) => {
  switch (action.type) {
      case "get_home_data":
        return state.merge({
            homeList:fromJS(action.homeList),
            recommentList:fromJS(action.recommentList),
            recommentWriterList:fromJS(action.recommentWriterList)
        })
    default:
      return state;
  }
};
