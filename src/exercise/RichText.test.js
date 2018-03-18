import React from 'react';
import ReactDOM from 'react-dom';
import RichText from "./RichText";

it('RichText render without crashed', () => {

    let div = document.createElement("div");
    ReactDOM.render(<RichText/>, div);
    console.log(div.innerHTML);
});