import React from 'react';
import ReactDOM from 'react-dom';

export default class DoodleArea extends React.Component {

    render() {
        // error
        //ReactDOM.findDOMNode(this);

        return (<canvas ref="mainCanvas">hogehoge</canvas>)
    };

    componentDidMount() {

        let canvasNode = ReactDOM.findDOMNode(this.refs.mainCanvas);
        console.log(canvasNode.innerHTML);
    };

}