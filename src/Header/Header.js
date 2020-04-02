import React, { useState } from 'react'
import './header.css'

const Header = () => {

  const [view, setView] = useState('home')

  if (view === 'home') {
    return (
      <div>
        <div className="header-home">
          <a href="#home-section" alt="go to home" className="selected" onClick={() => setView('home')}>Home</a>
          <a href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
          <a href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
          <a href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
        </div>
      </div>
    )
  } else if (view === 'about') {
    return (
      <div className="header-about">
        <a href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
        <a href="#about-section" alt="go to about" className="selected" onClick={() => setView('about')}>About</a>
        <a href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
        <a href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
      </div>
    )
  } else if (view === 'projects') {
    return (
      <div className="header-projects">
        <a href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
        <a href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
        <a href="#project-section" alt="go to projects" className="selected" onClick={() => setView('projects')}>Projects</a>
        <a href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
      </div>
    )
  } else if (view === 'contact') {
    return (
      <div className="header-contact">
        <a href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
        <a href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
        <a href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
        <a href="#contact-section" alt="go to contact" className="selected" onClick={() => setView('contact')}>Contact</a>
      </div>
    )
  }
}

export default Header