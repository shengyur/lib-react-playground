import React,{Component,createContext} from 'react';
import './App.css';

const MyContext = createContext();
const OnlineContext = createContext();


class Leaf extends Component{
    render(){
        return (
            <MyContext.Consumer>
                {
                    ctxVal=>{
                        return <OnlineContext.Consumer>
                            {
                                (online)=>{
                                    return <div>ctxVal:{ctxVal},online:{online+""}</div>
                                }
                            }
                        </OnlineContext.Consumer>
                    }
                }
            </MyContext.Consumer>
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

        return (
            <MyContext.Provider value={ctxVal}>
                <OnlineContext.Provider value={online}>
                    <button type="button" 
                        onClick={()=>{
                            this.setState({ctxVal:90})
                            }}
                        >Press
                    </button>
                    <Middle/>
                    <button type="button" 
                        onClick={()=>{
                            this.setState({online:!online})
                            }}
                        >Press
                    </button>
                </OnlineContext.Provider>
            </MyContext.Provider>
        );
      }
}

export default App;
