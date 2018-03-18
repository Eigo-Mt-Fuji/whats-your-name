import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from "./Fetch";

it('test Fetch use whatwg-fetch api without render', () => {

    let div = document.createElement("div");
    ReactDOM.render(<Fetch><span>test fetch</span></Fetch>, div);
    console.log(div.innerHTML);
})