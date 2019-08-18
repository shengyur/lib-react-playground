import React,{Component,useState} from 'react';
import './App.css';


  function App(props) {
    
    const [count,setCount] = useState(()=>{//只在初始化时，运行一次
        console.log(props.defaultCount )
        return props.defaultCount || 0
    }); 
    
    const [name,setName] = useState("shengyur");
    // const [count,setCount] = useState(0); 

    return (
      <div>
          <button type="button"
            onClick={()=>
                setCount(count+1)
            }>click</button>
            Count:{count}
            Name:{name}
      </div>
    );
  }
  
  class App2 extends Component{
      state={
          count:0
      }

      render(){
          const {count} = this.state;
          return (
            <div>
                <button type="button"
                onClick={()=>{
                    this.setState({count:count+1})
                }}>click</button>
                Count:{count}
            </div>
          )
      }
  }
  
export default App;
