import React from 'react';

import createReactClass from 'create-react-class';

var SurveyQuestion = createReactClass({

    render: function() {
        let surveyQuestionId = this.props.id;
        let classes = 'some-class-name';
        return (<div id={surveyQuestionId} className={classes}></div>);
    }
})


export default SurveyQuestion;