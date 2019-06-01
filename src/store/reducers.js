import {combineReducers} from 'redux-immutable';
import headerReducer from '../common/header/store';

let reducer = combineReducers({
    header:headerReducer
})

export default reducer;