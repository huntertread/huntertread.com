import React from 'react'
import './header.css'

const Header = ({ view, setView }) => {

  if (view === 'home') {
    return (
      // <div className="header-home">
      //   <button className="selected" onClick={() => setView('home')}>Home</button>
      //   <button onClick={() => setView('about')}>About</button>
      //   <button onClick={() => setView('projects')}>Projects</button>
      //   <button onClick={() => setView('contact')}>Contact</button>
      // </div>
      <div className="header-home">
        <a className="selected" href="#" alt="go to home" onClick={() => setView('home')}>Home</a>
        <a href="#" alt="go to about" onClick={() => setView('about')}>About</a>
        <a href="#" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
        <a href="#" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
      </div>
    )
  } else if (view === 'about') {
    return (
      <div className="header-about">
        <button onClick={() => setView('home')}>Home</button>
        <button className="selected" onClick={() => setView('about')}>About</button>
        <button onClick={() => setView('projects')}>Projects</button>
        <button onClick={() => setView('contact')}>Contact</button>
      </div>
    )
  } else if (view === 'projects') {
    return (
      <div className="header-projects">
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('about')}>About</button>
        <button className="selected" onClick={() => setView('projects')}>Projects</button>
        <button onClick={() => setView('contact')}>Contact</button>
      </div>
    )
  } else if (view === 'contact') {
    return (
      <div className="header-contact">
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('about')}>About</button>
        <button onClick={() => setView('projects')}>Projects</button>
        <button className="selected" onClick={() => setView('contact')}>Contact</button>
      </div>
    )
  }
}

export default Header