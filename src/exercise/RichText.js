import React from 'react';

export default class RichText extends React.Component {

    handleKeyDown() {

        let editor = ReactDOM.findDOMNode(this.refs.editableDiv);
        let html = editor.innerHTML;
        console.log(html);
    };

    render() {

        return (
            <div ref="editableDiv"
                 contentEditable="true"
                 onKeyDown={this.handleKeyDown}>
            </div>
        )
    }
};