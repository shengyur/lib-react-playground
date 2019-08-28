import React, { useState, useMemo, memo, useCallback } from 'react';
import './App.css';
import Usual from "./components/Ususl";


//注意：滥用context会破坏组件独立性
const Counter = memo(function (props) {
    // console.log("Counter render");
    return (
        <h1 onClick={props.onClick}>{props.count}</h1>
    )
})

function App() {
    const [count, setCount] = useState(0);
    //useEffect 是在渲染期间完成的 丹useMemo是渲染过程中调用的
    const double = useMemo(() => {
        return count * 2
    }, [count === 3])
    //只要 count === 3 就会触发useMemo中函数的执行

    // const isClick=useMemo(()=>{
    //     return ()=>{
    //         console.log("clicked")
    //     };
    // },[]);
    //userMemo(()=>fn) 等价于 useCallback(fn)

    const isClick = useCallback(() => {
        console.log("clicked")
    }, []);


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            double {double}
            <Counter count={double} onClick={isClick} />
            <hr />
            HOC:
            <Usual />
        </div>
    );
}

export default App;
