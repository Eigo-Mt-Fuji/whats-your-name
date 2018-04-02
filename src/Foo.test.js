import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PropTypes from 'prop-types';
const Foo = ({children}) =>
	<div className="Foo">
		<span className="bar">bar</span>
		{children}
		<span className="bar">bar</span>
	</div>;

Foo.propTypes = {
	children: PropTypes.any
};

test('has a .Foo class name', t => {
	const wrapper = Enzyme.shallow(<Foo/>);
	t.true(wrapper.hasClass('Foo'));
});

test('renders two `.Bar`', t => {
	const wrapper = Enzyme.shallow(<Foo/>);
	t.is(wrapper.find('.bar').length, 2);
});

test('renders children when passed in', t => {
	const wrapper = Enzyme.shallow(
		<Foo>
			<div className="unique"/>
		</Foo>
	);
	t.true(wrapper.contains(<div className="unique"/>));
});

