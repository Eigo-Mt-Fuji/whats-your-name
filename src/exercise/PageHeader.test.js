import PageHeader from './PageHeader';
import ReactDOM from 'react-dom';
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

it('test PageHeader with material-ui-react', () =>{

    let div = document.createElement('div');
    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <PageHeader label="Yeah!"></PageHeader>
        </MuiThemeProvider>, div
    );
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
});