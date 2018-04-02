import React from 'react';

import test from 'ava';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import '@babel/register';
import MyAvatar from './MyAvatar';

test('test', t => {

    let obj = Enzyme.shallow((<MyAvatar age={12} name={"hoge"} src={"./hoge.jpg"}></MyAvatar>));
    t.true(obj.contains(<span>hoge</span>));
    console.log(obj.html());
    t.pass();
});