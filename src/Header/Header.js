import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import HamburgerNav from './HamburgerNav/HamburgerNav'
import './header.css'

const Header = () => {

  const [view, setView] = useState('home')

  if (view === 'home') {
    return (
      <div>
        <MediaQuery minDeviceWidth={520}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-home">
            <a tabIndex="1" href="#home-section" alt="go to home" className="selected" onClick={() => setView('home')}>Home</a>
            <a tabIndex="2" href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
            <a tabIndex="3" href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
            <a tabIndex="4" href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={520}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  } else if (view === 'about') {
    return (
      <div>
        <MediaQuery minDeviceWidth={520}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-about">
            <a tabIndex="1" href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
            <a tabIndex="2" href="#about-section" alt="go to about" className="selected" onClick={() => setView('about')}>About</a>
            <a tabIndex="3" href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
            <a tabIndex="4" href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={520}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  } else if (view === 'projects') {
    return (
      <div>
        <MediaQuery minDeviceWidth={520}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-projects">
            <a tabIndex="1" href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
            <a tabIndex="2" href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
            <a tabIndex="3" href="#project-section" alt="go to projects" className="selected" onClick={() => setView('projects')}>Projects</a>
            <a tabIndex="4" href="#contact-section" alt="go to contact" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={520}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  } else if (view === 'contact') {
    return (
      <div>
        <MediaQuery minDeviceWidth={520}>
          <nav role="banner navigation" aria-label="Main Navigation" className="header-contact">
            <a tabIndex="1" href="#home-section" alt="go to home" onClick={() => setView('home')}>Home</a>
            <a tabIndex="2" href="#about-section" alt="go to about" onClick={() => setView('about')}>About</a>
            <a tabIndex="3" href="#project-section" alt="go to projects" onClick={() => setView('projects')}>Projects</a>
            <a tabIndex="4" href="#contact-section" alt="go to contact" className="selected" onClick={() => setView('contact')}>Contact</a>
          </nav>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={520}>
          <HamburgerNav view={view} setView={setView}/>
        </MediaQuery>
      </div>
    )
  }
}

export default Header