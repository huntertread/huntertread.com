import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

// navigation
  // has a different layout for desktop/tablet and mobile (screen width 500px)
  // DT
    // on desktop, shows which page i am currently viewing with an underscore
    // changes color to correspond with the page i am viewing, based on which page I have clicked
    // scrolls to the new section when navigation is selected
  // Mobile
    // is a hamburger nav