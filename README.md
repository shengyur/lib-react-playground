# lib-react-playground
该代码库用于管理 React 技术栈的多种实践，包括但不局限于 React 状态管理(Redux、React-Redux、Redux-thunk、Redux-sage)、React-Router、React原理分析等
React 服务端渲染/同构 请看：https://github.com/shengyur/ssr_react

# 工程介绍
使用 Create-React-APP 搭建，用于实践 React + Redux 应用
```javascript
    本地开发：
        npm i  / yarn
        npm start
    构建上线：
        npm run build  /yarn run build
```
https://github.com/shengyur/ssr_react

# 分支介绍
## - master: 使用redux和redux-thunk 构建 TodoList Demo

<hr/>
<img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lc9KLBpJjn7KmBSCpDK%2F-LfjYtSjrck1P0Ix5SfT%2F-Lfj_DOVec9V5cFVbn46%2Fredux.png?alt=media&token=dffa6057-4fad-4b60-bb82-2d2a2777fa89" style="width:50%;margin:0 auto;" title="redux工作流">
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

## - react-redux: 使用 react-redux 连接react
- react-jianshu

- react-test
- react-webpack
- redux-origin
- redux-sage
- redux-thunk

#redux 工作流梳理
