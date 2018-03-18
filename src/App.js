import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Custom.css';

import SequenceDiagram from 'react-sequence-diagram';
import ApiHelper from "./exercise/ApiHelper";
 
const input =
  'User->Slack: Type /maskcap command\n' +
  'Note right of Slack: send https POST request to maskcap\'s endpoint\n' +
  'Slack->AWSLambda: JSON\n' +
  'Note right of AWS Lambda: Get channel\'s history (https://api.slack.com/channels/history), mask, and convert to markdown \n' +
  'Lambda API->Github: Commit via jsgit npm\n' +
  'Github->AWSLambda: (^_^)\n' +
  'Lambda API->Slack: JSON response\n' +
  'Slack->User: Show result in (the user only)\n';
 
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
          <h1 className="App-title">Welcome to React!!!Yeah</h1>
        </header>
        <SequenceDiagram input={input} options={options} onError={onError} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  };
  componentDidMount() {

      let helper = new ApiHelper("/ip.json");
      helper.get().then((json)=>{

          console.log("Response", json);
      });
  }
}

export default App;
