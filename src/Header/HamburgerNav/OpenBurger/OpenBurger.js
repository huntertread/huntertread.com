import React from 'react'
import './openburger.css'

const OpenBurger = ({ isOpen, setIsOpen, view, setView }) => {

  const burgerClick = (newView) => {
    setView(newView)
    setIsOpen(!isOpen)
  }

  let viewClass = null

  if (view === 'home') {
    viewClass = 'open-burger-home'
  } else if (view === 'about') {
    viewClass = 'open-burger-about'
  } else if (view === 'projects') {
    viewClass = 'open-burger-projects'
  } else if (view === 'contact') {
    viewClass = 'open-burger-contact'
  }

  return (
    <nav className={viewClass}>
      <i className="fa fa-close" onClick={() => setIsOpen(!isOpen)}></i>
      <a href="#home-section" alt="go to home" onClick={() => burgerClick('home')}>Home</a>
      <a href="#about-section" alt="go to about" onClick={() => burgerClick('about')}>About</a>
      <a href="#project-section" alt="go to projects" onClick={() => burgerClick('projects')}>Projects</a>
      <a href="#contact-section" alt="go to contact" onClick={() => burgerClick('contact')}>Contact</a>
    </nav>
  )
}

export default OpenBurger