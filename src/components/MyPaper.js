import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {green50, lightBlack} from 'material-ui/styles/colors';
import SequenceDiagramWrapper from './SequenceDiagramWrapper';

export default class MyPaper extends React.Component {


    render() {

        let chip_wrapper_style = { display:'flex', flexWrap: 'wrap', width: '100%', height: '100%' }
        return (
            <Paper zDepth={1} rounded={false}>
                {this.props.children}
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
                <div style={chip_wrapper_style}>
                    {/*<Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test1</Chip>*/}
                    {/*<Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test2</Chip>*/}
                    {/*<Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test3</Chip>*/}
                    {/*<Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test4</Chip>*/}
                </div>
            </Paper>
        );
    }
};