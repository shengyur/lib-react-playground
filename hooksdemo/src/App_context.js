import React,{Component,createContext} from 'react';
import './App.css';

const MyContext = createContext(100);
const OnlineContext = createContext();


class Leaf extends Component{
    static contextType = MyContext;

    render(){
        const ctxVal = this.context;

        return (
            <div>ctxVal:{ctxVal}</div>
        )
    }
}

class Middle extends Component{
    render(){
        return <Leaf/>;
    }
}

class App extends Component{
    state={
        ctxVal:80,
        online:false
    }
    render(){
        const {ctxVal,online} = this.state;
        // 如果没有MyContext.Provider 获取的是默认值
        return (
            <div>
            <MyContext.Provider value={ctxVal}> 
                    <button type="button" 
                        onClick={()=>{
                            this.setState({ctxVal:90})
                            }}
                        >Press
                    </button>
                    <Middle/>
                    {/* <button type="button" 
                        onClick={()=>{
                            this.setState({online:!online})
                            }}
                        >Press
                    </button> */}
            </MyContext.Provider>
            </div>
        );
      }
}

export default App;
