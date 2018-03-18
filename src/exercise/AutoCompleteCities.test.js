import React from 'react';
import ReactDOM from 'react-dom';
import AutoCompleteCities from "./AutoCompleteCities";

it('test AutoCompleteCities without render crashed', () => {

    let div = document.createElement("div");
    ReactDOM.render(<AutoCompleteCities/>, div);
});