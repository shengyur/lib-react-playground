import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ITEM} from './actionTypes.js'
import axios from 'axios';

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM 
})

export const deleteItemAction = (index)=>({
    type:DELETE_TODO_ITEM,
    index
})

export const initListAction = (value)=>({
    type: INIT_LIST_ITEM,
    value
})

export const getTodoList = ()=>{
    //使用thunk之后  action不仅仅可以返回对象了 也可以返回函数
    // 把action发送给store时，函数会自动被执行
    // dispatch 默认传入store的dispatch方法
    return (dispatch)=>{
        axios.get('http://localhost:3737/list.json').then((res)=>{
            const action = initListAction(res.data);
            dispatch(action)
        })
    }
}