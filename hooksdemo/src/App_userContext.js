import React, { useState, createContext,useContext } from 'react';
import './App.css';

const CountContext = createContext();

class Foo extends React.Component {
    render(){
        return (
            <div>
                <CountContext.Consumer>
                    {
                        count=><h1>{count}</h1>
                    }
                </CountContext.Consumer>
            </div>
        )
    }
}

//注意：滥用context会破坏组件独立性
function Counter(){
    const count = useContext(CountContext);
    return (
        <h1>{count}</h1>
    )
}

class Bar extends React.Component {
    static contextType = CountContext;

    render(){
        return (
            <div>
               <h1>{this.context}</h1>
            </div>
        )
    }
}

function App() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("shengyur1");

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <CountContext.Provider value={name}>
                <Foo/>
                <Bar/>
                <Counter/>
            </CountContext.Provider>
        </div>
    );
}

export default App;
