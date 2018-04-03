import React from 'react';
import Paper from 'material-ui/Paper';
import test from 'ava';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import '@babel/register';
import MyPaper from "./MyPaper";
import MyAvatar from "./MyAvatar";
import SequenceDiagramWrapper from './SequenceDiagramWrapper';
import Grid from 'react-css-grid';

test('render MyPaper without crash', (t) => {

    let obj = Enzyme.shallow(<MyPaper>test</MyPaper>);
    t.is(obj.contains(
        <Paper zDepth={1} rounded={false}>
            <Grid width={200} gap={5}>
                <div>test</div>
                <div>
                    <MyAvatar age={30} name={"袖下英吉郎"} src={"./images/avatar.jpg"}></MyAvatar>
                </div>
                <div>
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
                </div>
            </Grid>
        </Paper>), true);
    t.pass();
});