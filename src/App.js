import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Greet2 } from './components/Greet2';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
import Props2 from './components/Props2';
import Props3 from './components/Props3';
import PropComponent from './components/PropsComponent';
import PropComponent2 from './components/PropsComponent2';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameListObj from './components/NameListObj';

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
        <NameList/>
        <NameListObj/>
        <UserGreeting/>
        <ParentComponent/>
        <FunctionClick/>
        <ClassClick/>
        <EventBind></EventBind>
        <Greet/>
        <Greet2/>
        <Welcome/>
        <Hello/>
        <Props name="Prop Tinnakorn"> <p> This is Children</p> </Props>
        <PropComponent name="Props Component Bell"/>
        <PropComponent2 name="Props Component2 Bell"/>
        <Message/>
        <Counter/>
        <Props2 name="Tinnakorn" gender="m"/>
        <Props3 name="Tinnakorn" gender="m"/>
      </header>
    </div>
  );
}

export default App;
