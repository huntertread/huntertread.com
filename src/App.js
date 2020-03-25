import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'

const App = () => {

  const [view, setView] = useState('home')

  let page = null;

  if (view === 'home') {
    page = <h1>HOMEPAGE</h1>
  } else if (view === 'about') {
    page = <h1>ABOUT</h1>
  } else if (view === 'projects') {
    page = <h1>PROJECTS</h1>
  } else if (view === 'contact') {
    page = <h1>CONTACT</h1>
  }

  return (
    <div className="App">
      <Header setView={setView} />
      {page}
      <Footer />
    </div>
  );
}

export default App;
