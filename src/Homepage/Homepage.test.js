import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
});