import React from 'react';
import './App.css';
import Home from './components/Home'
import ProgressBar from './components/ProgressBar'
import Pokemons from './components/Pokemons'

function App() {
  return (
    <div className="App">
      <Home></Home>
      <ProgressBar percentage={30} color='green'></ProgressBar>
      <ProgressBar percentage={50}></ProgressBar>
      <ProgressBar percentage={99} color='pink'></ProgressBar>
      <ProgressBar percentage={10}></ProgressBar>
      <Pokemons></Pokemons>
    </div>
  );
}

export default App;
