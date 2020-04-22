import React from 'react';
import ReactDOM from 'react-dom';
import OpenBurger from './OpenBurger';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OpenBurger />, div);
});