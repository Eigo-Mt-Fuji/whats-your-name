import Timer from './Timer';
import React from 'react';
import ReactDOM from 'react-dom';

it('test Timer use mixin without render crashed', () => {

    let div = document.createElement("div");
    ReactDOM.render(<Timer></Timer>, div);
});
