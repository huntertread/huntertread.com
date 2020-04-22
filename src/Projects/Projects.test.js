import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Projects />, div);
});

// projects
  // only allows one drawer to be open at a time
  // has clickable links that navigate to new tab