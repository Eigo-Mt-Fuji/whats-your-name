import React from 'react';


class DraggableQuestions extends React.Component {

    render() {

        return (<div className={this.props.className}>{this.props.children}</div>)
    }
}
export default class SurveyEditor extends React.Component {

    handleDragOver() {

    };

    render () {
        return (<div className='survey-editor'>
            <div className='row'>
                <aside className='sidebar col-md-3'>
                    <h2>サーベイの部品</h2>
                    <DraggableQuestions className="sidebar-draggable">Drag Please</DraggableQuestions>
                </aside>
            </div>
            <div className='survey-canvas col-md-9'>
                <div className={'drop-zone well well-drop-zone'}
                     onDragOver={this.handleDragOver}
                     onDragEnter={this.handleDragEnter}
                     onDragLeave={this.handleDragLeave}
                     onDrop={this.handleDrop}>
                    左側の部品をドラッグアンドドロップしてください
                </div>
            </div>
        </div>);
    };
    handleDragEnter() {

    };

    handleDragLeave() {

    };

    handleDrop() {

    };
};