import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Custom.css';
import MyPaper from './components/MyPaper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SequenceDiagram from 'react-sequence-diagram';
// import ApiHelper from "./ApiHelper";

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
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">テスト</h1>
                </header>
                <SequenceDiagram input={input} options={options} onError={onError}/>
                <p className="App-intro">
                    はじめまして。
                </p>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <MyPaper></MyPaper>
                </MuiThemeProvider>
            </div>
        );
    };

    // componentDidMount() {
    //
    //     let helper = new ApiHelper("/ip.json");
    //     helper.get().then((json) => {
    //
    //         console.log("Response", json);
    //     });
    // }
}

export default App;
