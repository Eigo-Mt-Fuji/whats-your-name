import React from 'react';
import SurveyTableRow from './SurveyTableRow';
import PropTypes from "prop-types";

export default class SurveyTable extends React.Component{

    static defaultProps = {
        surveys: []
    };
    static propTypes= {

        surveys: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    render() {

        let elements = [];
        this.props.surveys.forEach((survey, i) => {

            elements.push(<SurveyTableRow key={'survey' + i} survey={survey}/>)
        });

        return (
            <div>
                {elements}
            </div>
        );
    }
};