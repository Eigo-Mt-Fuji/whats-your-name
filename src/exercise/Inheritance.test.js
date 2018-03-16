import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Inheritance';

it('Timer with ES6 class extends , test render without crashed', () => {

    let div = document.createElement('div');
    ReactDOM.render(<Timer/>, div);

    setTimeout(function() {
        console.log(div.innerHTML);
    }, 1000);
});