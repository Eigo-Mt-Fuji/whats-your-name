import React from 'react';
import Paper from 'material-ui/Paper';
import test from 'ava';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import '@babel/register';
import MyPaper from "./MyPaper";
import SequenceDiagramWrapper from './SequenceDiagramWrapper';

test('render MyPaper without crash', (t) => {

    let obj = Enzyme.shallow(<MyPaper>test</MyPaper>);
    t.is(obj.contains(<Paper zDepth={1} rounded={false}>test<SequenceDiagramWrapper diagramText={
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
    </Paper>), true);
    t.pass();
});