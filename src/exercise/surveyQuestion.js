import React from 'react';

import createReactClass from 'create-react-class';

var SurveyQuestion = createReactClass({

    getSurveyId: function() {

        return this.props.id;
    },
    render: function() {

        let classes = 'some-class-name';
        return (<div id={this.getSurveyId()} className={classes}></div>);
    }
})


export default SurveyQuestion;