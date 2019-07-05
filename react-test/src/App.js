import React from 'react';
import './App.css';
import Counter from './components/counter';
import Link from './components/link';
import CheckboxWithLabel from './components/CheckboxWithLabel';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Link children={"这是一个链接"} page="https://www.baidu.com"/>
      <hr/>
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    </div>
  );
}

export default App;
