import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Custom.css';

import SequenceDiagram from 'react-sequence-diagram';
 
const input =
  'Andrew->China: Says Hello\n' +
  'Note right of China: China thinks\\nabout it\n' +
  'China-->Andrew: How are you?\n' +
  'Andrew->>China: I am good thanks!';
 
const options = {
  theme: 'simple'
};

function onError(error) {
  console.log(error);
}
 
class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SequenceDiagram input={input} options={options} onError={onError} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
