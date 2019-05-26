import {takeEvery,put} from 'redux-saga/effects'
import {GET_INTI_LIST} from './actionTypes'
import {initListAction} from './actionCreators';
import axios from 'axios'

function* getInitList(){
    try{
        const res = yield axios.get('http://localhost:3737/list.json');

        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log(e);
    }
    
}

export default function* todoSaga(){
    yield takeEvery(GET_INTI_LIST, getInitList);
}