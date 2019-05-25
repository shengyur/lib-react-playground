import React from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';

const TodoListUI = (props)=>{
    return (
        <div>       
            <Input placeholder='todo info' 
            style={{height:'50px',width:'500px'}}
            value={props.inputValue}
            onChange={props.handelInputChange}/>
            <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
            <List 
                size="large"
                style={{width:'500px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index)=> (
                    <List.Item onClick={()=>{
                        console.log("item,index",item,index)
                        props.handleItemDelete(index)
                    }}>
                      {item}
                    </List.Item>
                  )}
              />
        </div>
    )
}


export default TodoListUI;