import React, { userEffect, useState, useEffect } from 'react';
import './App.css';


function App() {
    const [count, setCount] = useState(0);
    // const [name, setName] = useState("name");

    //在 useEffect 第一个参数的函数中我们可以返回一个函数用于执行清理功能，它会在ui组件被清理之前执行，
    //结合上面所学的知识使用 useEffect 模拟 componentWillUnmount 生命周期函数

    // useEffect第二个参数为一个数组。当我们提供第二个参数时，只有第二个参数被更改 useEffect 才会执行。
    // 利用第二个参数我们可以模拟出类组件的 componentDidMount 生命周期函数
    useEffect(() => {//react 会保存一次生命周期中的参数 并在渲染后+DOM更新后（每次渲染后）调用它
        document.title = `clicked ${count} times`;//count 已经保存在函数作用域中
        // console.log(count + 'componentDidMount fetch Data...');
        return () => {
            console.log('componentUnmount cleanup...');
        }
    }, [])//如果第二个参数是空数组 就只在初始化时执行一次，更新时，不执行函数

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
        </button>
            </div>
        );
    }
}

export default App;
