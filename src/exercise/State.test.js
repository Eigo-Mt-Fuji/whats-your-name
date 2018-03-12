import React from 'react';
import State from './State';
import ReactDOM from 'react-dom';

it('test render State without crash', () => {

    let div = document.createElement('div');
    ReactDOM.render(<State></State>, div);

});