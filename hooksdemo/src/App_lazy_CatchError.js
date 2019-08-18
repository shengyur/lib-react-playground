import React,{Component,lazy,Suspense} from 'react';
import './App.css';

const List = lazy(()=>import(/* webpackChunkName:"List" */'./List'))

class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }


class App extends Component{
    state = { hasError: false }    

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        this.setState({hasError:true})
      }

    render(){
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
          }
      
        return (
            <div>
                <Suspense fallback={<div>Loading.......</div>}>
                    <List/>

                    <BuggyCounter/>
                </Suspense>
            </div>
        );
      }
}

export default App;
