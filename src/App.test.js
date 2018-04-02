import React from 'react';

import test from 'ava';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import '@babel/register';


import App from './App';

test('renders without crashing', t => {

    let app = Enzyme.shallow((<App/>));
    t.is(app.find(".App").length, 1);
    t.pass();
});
