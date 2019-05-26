import React from 'react';
// import store from './store';
import {connect} from 'react-redux';


//无状态组件  && UI组件
const TodoList = (props)=>{
    
    const {changeInputValue,inputValue,handleDelete,list,handleSubmit} = props;
    
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleSubmit}>提交</button>
            </div>
            <ul>
                {list.map((item,index)=>{
                    return (<li key={index} onClick={()=>handleDelete(index)}>{item}</li>)
                })}
            </ul>
        </div>
    )
    
}

//store中的数据会映射到组件的props上面
const mapStateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

// 把store.dispatch 挂载到 props上
const mapDispatchToProps = (dispatch)=>{
    return {
        changeInputValue(e){ 
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action)
        },
        handleSubmit(){
            const action = {
                type:'add_item'
            }
            dispatch(action)
        },
        handleDelete(index){
            const action = {
                type:'remove_item',
                index:index
            }
            dispatch(action)
        }
    }
}
// connect 方法执行的结果 是容器组件
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);