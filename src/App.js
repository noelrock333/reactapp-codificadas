import React from 'react';
import './App.css';
import Home from './components/Home'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <div className="App">
      <Home></Home>
      <ProgressBar percentage={30}></ProgressBar>
      <ProgressBar percentage={50}></ProgressBar>
      <ProgressBar percentage={99}></ProgressBar>
      <ProgressBar percentage={10}></ProgressBar>
    </div>
  );
}

export default App;
