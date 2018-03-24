import React from 'react';
import ReactDOM from 'react-dom';
import MyPaper from "./MyPaper";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

it('render MyPaper without crash', () => {

    let div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}><MyPaper><div>test</div></MyPaper></MuiThemeProvider>, div);
    console.log(div.innerHTML);
});