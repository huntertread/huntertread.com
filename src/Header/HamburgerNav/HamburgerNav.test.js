import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerNav from './HamburgerNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HamburgerNav />, div);
});