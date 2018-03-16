import SurveyEditor from './SurveyEditor';
import React from 'react';
import ReactDOM from 'react-dom';

it('test surveyEditor without crashed', () =>{

    ReactDOM.render(<SurveyEditor/>, document.createElement('div'));

});