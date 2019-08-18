import React,{Component,lazy,Suspense} from 'react';
import './App.css';

  class MouseTracker extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <h1>Move the mouse around!</h1>
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        </div>
      );
    }
  }


  class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="/cat.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }

  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '500px',width:"500px",backgroundColor:'pink' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }

  function App() {
    return (
      <div>
       {/* <MouseTracker/> */}
       <h1>Move the mouse around!</h1>
        <Mouse render={mouse =><Cat mouse={mouse}/>}/>
      </div>
    );
  }
  
  
export default App;
