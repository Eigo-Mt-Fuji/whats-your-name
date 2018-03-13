import React from 'react';
import SurveyTableRow from './SurveyTableRow';
import ReactDOM from 'react-dom';


it('test SurveyTableRow for propTypes without crashed', () => {

    const div = document.createElement("div");
    let whatSurvey={id: 100};
    ReactDOM.render(<SurveyTableRow survey={whatSurvey}><button/></SurveyTableRow>, div);
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
});