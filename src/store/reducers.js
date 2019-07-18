import { combineReducers } from "redux-immutable";
import headerReducer from "../common/header/store";
import {reducer as homeReducer} from "../pages/home/store";
import scrollReducer from "../common/sideTool/store/reducer";
import detailReducer from "../pages/detail/store/reducer";

let reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  showScroll:scrollReducer,
  detail:detailReducer
})

export default reducer;
