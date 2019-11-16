import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Greet2 } from './components/Greet2';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

const nickname = 'BelL NaJa';

const user = {
  firstName : 'TinnakorN',
  lastName  : 'ChoompeE'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {formatName(user)} </p>
        <p> { nickname } </p>
        <Greet/>
        <Greet2/>
        <Welcome/>
        <Hello/>
      </header>
    </div>
  );
}

export default App;
