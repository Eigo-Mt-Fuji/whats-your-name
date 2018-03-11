import React from 'react';

import createReactClass from 'create-react-class';
React.createClass = createReactClass;
var Divider = React.createClass({

    render: function(){

        return (
            <div className="divider">
                <h2>{this.props.children}</h2><hr />
            </div>
        );
    }
});

export default Divider;
