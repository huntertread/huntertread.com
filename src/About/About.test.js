import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});

// about section
  // has a resume available for download