import React from 'react';
// import './App.css';
import Usual from "./components/Ususl";
import FuncContainer from './components/FuncContaner';


function App() {
  return (
    <div className="App">
      HOC:
      <Usual />
      <hr />
      <FuncContainer />
    </div >
  );
}

export default App;
