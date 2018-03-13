import React from 'react';
import ReactDOM from 'react-dom';
import SurveyTable from './SurveyTable';


it('SurveyTable for getDefaultProps , render without crashed', () => {
    const div = document.createElement("div");
    let surveys = [{id: 100, title: 'SuperHeroes', name: 'Kenta'}, {id: 200, title: 'HogeEnemy', name: 'Kenji'}];
    ReactDOM.render(<SurveyTable surveys={surveys}/>, div);
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
});