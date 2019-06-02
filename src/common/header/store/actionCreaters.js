import * as actionTypes from "./actionTypes";
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList =(data)=>({
    type:actionTypes.GET_HOT_LIST,
    data:fromJS(data),//保持数据类型一致！
    totalPage: Math.ceil(data.length /10)
})

export const handleFocusAction = ()=>({
    type:actionTypes.INPUT_FOCUSED
})

export const handleBlurAction = ()=>({
    type:actionTypes.INPUT_NOT_FOCUSED
})

export const handleMouseEnter = ()=>({
    type:actionTypes.MOUSE_IN
})
export const handleMouseLeave = ()=>({
    type:actionTypes.MOUSE_LEAVE
})
export const changePage = (page)=>({
    type:actionTypes.CHANGE_PAGE,
    page
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