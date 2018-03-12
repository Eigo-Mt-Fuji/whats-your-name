import React from 'react';
import createReactClass from 'create-react-class';

React.createClass = createReactClass;
let State = React.createClass({

    getInitialState: function() {

        return {
            isComplete: false
        }
    },
    getIsComplete:  function() {

        return this.state.isComplete ? 'is-complete' : '';
    },
    render: function() {
        return (<div className={this.getIsComplete()}></div>)
    }
});

export default State ;