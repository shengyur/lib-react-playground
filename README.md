# lib-react-playground
该代码库用于管理 React 技术栈的多种实践，包括但不局限于 React 状态管理(Redux、React-Redux、Redux-thunk、Redux-sage)、React-Router、React 组件自动化测试、React原理分析等，React 服务端渲染/同构 请戳：[这里](https://github.com/shengyur/ssr_react)
# 工程介绍
使用 Create-React-APP 搭建，用于实践 React + Redux 应用
```javascript
    npm i  / yarn 
    npm start
    npm run build  /yarn run build
```
# 分支介绍
## master分支: 使用redux和redux-thunk 构建 TodoList Demo

<hr/>
<img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lc9KLBpJjn7KmBSCpDK%2F-LfjYtSjrck1P0Ix5SfT%2F-Lfj_DOVec9V5cFVbn46%2Fredux.png?alt=media&token=dffa6057-4fad-4b60-bb82-2d2a2777fa89" width="50%" title="redux工作流">
<hr/>

### redux 工作流梳理：
1. 首先，用户发出Action
```
store.dispatch(action);
```
2. Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State
```
export default (state=defaultState,action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }
    return state
}
```
3. State 一旦有变化，Store 就会调用监听函数
```
// 设置监听函数
store.subscribe(listener);
```
4. listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。
```
 handleStoreChange = ()=>{
        this.setState(store.getState())
    }
```

## react-redux 分支: 
### 使用 react-redux 连接 react
1. 使用createStore 创建store 
```
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```
2. 使用 Provider 在根组件 注入 Store
```
<Provider store = {store}>
    <TodoList/>
</Provider>
```
3. 容器组件使用 connect() 方法连接 Redux
```
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
```
### Reducer 的拆分与重构:
随着项目越大，如果将所有状态的 reducer 全部写在一个函数中，将会 难以维护；
可以将 reducer 进行拆分，也就是 函数分解，最终再使用combineReducers()进行重构合并；
### 异步 Action: 
由于 Reducer 是一个严格的纯函数，因此无法在 Reducer 中进行数据的请求，需要先获取数据，再dispatch(Action)即可，
下面是三种不同的异步实现:
- [redex-thunk](https://github.com/reduxjs/redux-thunk)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [redux-observable](https://redux-observable.js.org/)
## redux-sage 分支：
使用redux-saga 实现异步Action
```
function* getInitList(){
    try{
        const res = yield axios.get('http://localhost:3737/list.json');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log(e);
    }
}

export default function* todoSaga(){
    yield takeEvery(GET_INTI_LIST, getInitList);
}
```
## redux-thunk 分支：
使用redux-thunk 实现异步Action
```
export const getTodoList = ()=>{
    // 使用redux-thunk之后  action不仅仅可以返回对象,也可以返回函数
    // 把action发送给store时，函数会自动被执行,dispatch 默认传入 store 的 dispatch 方法
    return (dispatch)=>{
        axios.get('http://localhost:3737/list.json').then((res)=>{
            const action = initListAction(res.data);
            dispatch(action)
        })
    }
}
```
## react-jianshu
 使用 React、Redux、React-Redux、Redux-thunk、Immutable.js 实现 [简书](https://www.jianshu.com/) 官网
 <hr/>
 <img src="https://raw.githubusercontent.com/shengyur/Images/master/img/jianshu.jpg" width="60%">
 <hr/>

实现功能：
 - 首页登录、退出登录
 - 详情页跳转
 - 热门搜索、换一批热门
 - 阅读更多 按需加载 

## react-test
使用 Enzyme 实现 React 组件的自动化测试



