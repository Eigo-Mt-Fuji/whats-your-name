import React from 'react';
import ReactDOM from 'react-dom';
import SurveyQuestion from './surveyQuestion';

it('test surveyQuestion', () => {
    let div = document.createElement("div");
    ReactDOM.render(<SurveyQuestion id="hoge">hi</SurveyQuestion>, div);
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
    console.log(div.innerHTML);
});