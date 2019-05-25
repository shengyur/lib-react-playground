import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ITEM} from './actionTypes.js'

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

