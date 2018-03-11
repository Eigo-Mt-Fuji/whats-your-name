
/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { jsdom } from 'jsdom';

it('renders without crashing', () => {
  let document = jsdom('<!doctype html><html><body></body></html>');
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

