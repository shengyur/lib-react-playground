import React,{Component}from 'react';
import 'antd/dist/antd.css';
import {Input,Button} from 'antd';
import { List } from 'antd';
import store from './store/store.js'
import {getInputChangeAction,getAddItemAction,deleteItemAction} from './store/actionCreators'
export default class TodoList extends Component{

    constructor(props){ 
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
        console.log(this.state)
    }
    handleStoreChange = ()=>{
        console.log("store change");
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


    handleItemDelete(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render(){
        return (
            <div>       
                <Input placeholder='todo info' 
                style={{height:'50px',width:'500px'}}
                value={this.state.inputValue}
                onChange={this.handelInputChange}/>
                <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                <List
                    size="large"
                    style={{width:'500px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item onClick={()=>this.handleItemDelete(index)}>{item}</List.Item>}
                />
            </div>
        )
    }
}
