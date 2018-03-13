import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

React.createClass = createReactClass;

export default React.createClass({

    propTypes: {

        survey: (PropTypes.shape(
            {
                id: PropTypes.number.isRequired
            }
        )).isRequired
    },
    render : function() {

        return (
            <div id={this.props.survey.id}>{this.props.children}</div>
        );
    }
});