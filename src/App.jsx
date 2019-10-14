import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.jsx'

function App() {
  return (
    <div className="App">
      <Counter inicial={0} step={1} />
      <Counter inicial={0}/>
    </div>
  );
}

export default App;
