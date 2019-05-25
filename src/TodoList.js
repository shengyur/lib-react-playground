import React,{Component}from 'react';
import 'antd/dist/antd.css';
import store from './store/store.js';
import {getInputChangeAction,getAddItemAction,deleteItemAction,getTodoList} from './store/actionCreators'
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
        const action = getTodoList();
        console.log(action);
        // 把action发送给store时，函数会自动被执行
        store.dispatch(action);
        // 把异步操作放到action中，便于管理以及测试
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