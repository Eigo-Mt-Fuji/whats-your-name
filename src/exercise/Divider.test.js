import React from 'react';
import ReactDOM from 'react-dom';
import Divider from './Divider';

it('Divider render without crashing', () => {

    const div = document.createElement("div")
    ReactDOM.render(<Divider/>, div)
})