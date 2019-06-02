import { INPUT_FOCUSED, INPUT_NOT_FOCUSED,GET_HOT_LIST } from "./actionTypes";
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList =(data)=>({
    type:GET_HOT_LIST,
    data:fromJS(data),//保持数据类型一致！
    totalPage: Math.ceil(data.length /10)
})

export const handleFocusAction = ()=>({
    type:INPUT_FOCUSED
})

export const handleBlurAction = ()=>({
    type:INPUT_NOT_FOCUSED
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get("/api/headerList.json").then((res)=>{
            if(res.status === 200 && res.data.success && res.data.data){
                dispatch(changeList(res.data.data))
            }
        })
    }
}