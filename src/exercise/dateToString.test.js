import React from 'react';
import ReactDOM from 'react-dom';

import jsx from './dateToString'

it('test dateToString render without crash', () => {
    const div = document.createElement("div");
    ReactDOM.render(jsx, div);
    ReactDOM.unmountComponentAtNode(div);
});