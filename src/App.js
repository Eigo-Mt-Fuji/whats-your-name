import React, {Component} from 'react';
import './App.css';
import './Custom.css';
import MyPaper from './components/MyPaper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
    render() {

        return (
            <div className="App">

                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <MyPaper>
                        <div className="App-intro" style={{width:"100%"}}>You're welcome, here.</div>
                    </MyPaper>
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
