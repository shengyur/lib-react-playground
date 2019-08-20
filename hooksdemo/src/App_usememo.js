import React, { useState,useMemo } from 'react';
import './App.css';


//注意：滥用context会破坏组件独立性
function Counter(props){
    return (
        <h1>{props.count}</h1>
    )
}

function App() {
    const [count,setCount] = useState(0);

    //useEffect 是在渲染期间完成的 丹useMemo是渲染过程中调用的
    const double = useMemo(()=>{
        return count*2
    },[count === 3])
    //只要 count === 3 就会触发useMemo中函数的执行

    const half = useMemo(()=>{
        return double / 4;
    },[double])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            double {double}
            <Counter count={count}/>
            half {half}
        </div>
    );
}

export default App;
