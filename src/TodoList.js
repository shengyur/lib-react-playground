import React,{Component}from 'react';
import 'antd/dist/antd.css';
import store from './store/store.js';
import {getInitList,getInputChangeAction,getAddItemAction,deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI.js';

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
        const action = getInitList();
        store.dispatch(action);
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