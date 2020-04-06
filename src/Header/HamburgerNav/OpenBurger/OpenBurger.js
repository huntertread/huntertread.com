import React from 'react'
import './openburger.css'

const OpenBurger = ({ isOpen, setIsOpen, setView }) => {

  const burgerClick = (view) => {
    setView(view)
    setIsOpen(!isOpen)
  }

  return (
    <nav className="open-burger">
      <a href="#home-section" alt="go to home" className="selected" onClick={() => burgerClick('home')}>Home</a>
      <a href="#about-section" alt="go to about" onClick={() => burgerClick('about')}>About</a>
      <a href="#project-section" alt="go to projects" onClick={() => burgerClick('projects')}>Projects</a>
      <a href="#contact-section" alt="go to contact" onClick={() => burgerClick('contact')}>Contact</a>
    </nav>
  )
}

export default OpenBurger