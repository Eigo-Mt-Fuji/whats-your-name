import React from 'react';
import Paper from 'material-ui/Paper';
import SequenceDiagramWrapper from './SequenceDiagramWrapper';
import MyAvatar from "./MyAvatar";

export default class MyPaper extends React.Component {


    render() {

        return (
            <Paper zDepth={1} rounded={false}>
                <div>
                    {this.props.children}
                </div>
                <MyAvatar age={30} name={"袖下英吉郎"} src={"./images/avatar.jpg"}></MyAvatar>
                <SequenceDiagramWrapper diagramText={
                    'You->This Site: Choose Introduction\n' +
                    'This Site->You: My summary profile \n' +
                    'Note right of You: More detail , About me\n' +
                    'You->This Site: Choose category \n' +
                    'This Site->You: Show topics of the category\n' +
                    'Note right of You: be interested in, About me\n' +
                    'You->This Site: Request meeting\n' +
                    'This Site->You: You\'re welcome!!\n'
                }>

                </SequenceDiagramWrapper>
            </Paper>
        );
    }
};