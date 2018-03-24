import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {green50, lightBlack} from 'material-ui/styles/colors';

export default class MyPaper extends React.Component {


    render() {

        let chip_wrapper_style = { display:'flex', flexWrap: 'wrap' }
        return (
            <Paper zDepth={1} rounded={false}>
                <div style={chip_wrapper_style}>
                    <Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test1</Chip>
                    <Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test2</Chip>
                    <Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test3</Chip>
                    <Chip labelColor={lightBlack}><Avatar backgroundColor={green50} src="images/uxceo-128.jpg"></Avatar>Test4</Chip>
                </div>
            </Paper>
        );
    }
};