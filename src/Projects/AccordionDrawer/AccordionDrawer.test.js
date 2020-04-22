import React from 'react';
import ReactDOM from 'react-dom';
import AccordionDrawer from './AccordionDrawer';

const testContent = ['three.js demo site']
const testLink = 'https://huntertread.github.io/threejsdemo/'
const testCta = 'Go To Project'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccordionDrawer title={'jestTest'} content={testContent} link={testLink} cta={testCta}/>, div);
});