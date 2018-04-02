import React from 'react';
import SequenceDiagram from 'react-sequence-diagram';

export default class SequenceDiagramWrapper extends React.Component {

    props = {

        diagramText: '',
        theme: ''
    };
    constructor(diagramText) {
        super();
        
        this.props.theme = 'hand';
    };
    onError(error) {
        console.log(error);
    };

    componentWillMount() {

        console.log("SequenceDiagramWrapper.componentWillMount input=" + this.props.diagramText);
    };

    render() {

        let style = {

            width: '100%',
            height: '100%'
        };

        return (
            <SequenceDiagram style={style} input={this.props.diagramText} options={{theme: this.props.theme}} onError={this.onError}/>
        )
    };

    componentDidMount() {

        console.log("SequenceDiagramWrapper.componentWillMount input=" + this.props.diagramText);
    };

} ;