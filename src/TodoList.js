import React,{Component}from 'react';
import 'antd/dist/antd.css';
import store from './store/store.js';
import {getInputChangeAction,getAddItemAction,deleteItemAction,initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI.js';
import axios from 'axios';

class TodoList extends Component{

    constructor(props){ 
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange = ()=>{
        this.setState(store.getState())
    }


    handelInputChange=(e)=>{
        console.log(e.target.value)
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }

    handleButtonClick = (e)=>{
        const action = getAddItemAction();
        store.dispatch(action)
    }


    handleItemDelete = (index)=>{
        console.log("handleItemDelete",index);
        const action = deleteItemAction(index);
        store.dispatch(action)
    }

    componentDidMount(){
        axios.get('http://localhost:3737/list.json').then((res)=>{
            const action = initListAction(res.data);
            store.dispatch(action)
            console.log(action);
            console.log(this.state.list);
        })
    }


    render(){
        return (
            <TodoListUI 
            inputValue = {this.state.inputValue}
            handelInputChange= {this.handelInputChange}
            list = {this.state.list}
            handleButtonClick = {this.handleButtonClick}
            handleItemDelete = {this.handleItemDelete}
            />
        )
    }
}

export default TodoList;