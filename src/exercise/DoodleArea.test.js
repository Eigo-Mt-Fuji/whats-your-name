import React from 'react';
import ReactDOM from 'react-dom';
import DoodleArea from "./DoodleArea";

it('DoodleArea use React.findDOMNode without crashed', () =>{

    let div = document.createElement('div');
    ReactDOM.render(<DoodleArea/>, div);
});