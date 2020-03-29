import React, { useState } from 'react';
import Header from './Header/Header'
import Homepage from './Homepage/Homepage'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import './App.css';

const App = () => {

  const [view, setView] = useState('home')

  let page = null;

  if (view === 'home') {
    page = <Homepage />
  } else if (view === 'about') {
    page = <About />
  } else if (view === 'projects') {
    page = <Projects />
  } else if (view === 'contact') {
    page = <Contact />
  }

  return (
    <div className="App">
      <Header view={view} setView={setView} />
      {page}
      <Footer view={view}/>
    </div>
  );
}

export default App;
