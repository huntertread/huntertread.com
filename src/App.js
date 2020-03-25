import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header'

const App = () => {

  const [view, setView] = useState('home')

  if (view === 'home') {
    return (
      <div className="App">
        <Header setView={setView} />
        <h1>HOMEPAGE</h1>
      </div>
    );
  } else if (view === 'about') {
    return (
      <div className="App">
        <Header setView={setView} />
        <h1>ABOUT</h1>
      </div>
    );
  } else if (view === 'projects') {
    return (
      <div className="App">
        <Header setView={setView} />
        <h1>PROJECTS</h1>
      </div>
    );
  } else if (view === 'contact') {
    return (
      <div className="App">
        <Header setView={setView} />
        <h1>CONTACT</h1>
      </div>
    );
  }
}

export default App;
