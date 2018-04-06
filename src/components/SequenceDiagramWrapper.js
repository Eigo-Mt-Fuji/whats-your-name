import React from "react";
import SequenceDiagram from "react-sequence-diagram";
import PropTypes from "prop-types";
export default class SequenceDiagramWrapper extends React.Component {

    static defaultProps= {
      diagramText: "",
      diagramTextTitle: "",
      theme: ""
    };
    static propTypes= {
      diagramText: PropTypes.string.isRequired,
      diagramTextTitle: PropTypes.string.isRequired,
      theme: PropTypes.string.isRequired
    };
    onError(error) {
        console.log(error);
    }

    componentWillMount() {

//        console.log("SequenceDiagramWrapper.componentWillMount input=" + this.props.diagramText);
    }

    render() {

        let style = {
          width: "100%",
          height: "100%"
        };

        return (
          <div style={style} >
            <div style={{width:"50%", margin:"0 auto"}} >{this.props.diagramTextTitle}</div>
            <SequenceDiagram style={{width:"50%", margin:"0 auto"}} input={this.props.diagramText} options={{theme: this.props.theme}} onError={this.onError}/>
          </div>
        );
    }

    componentDidMount() {

//        console.log("SequenceDiagramWrapper.componentWillMount input=" + this.props.diagramText);
    }

}
