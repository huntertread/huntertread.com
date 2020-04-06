import React, { useState } from 'react'
import OpenBurger from './OpenBurger/OpenBurger'
import './hamburgernav.css'

const HamburgerNav = ({ view, setView }) => {

  const [isOpen, setIsOpen] = useState(false)

  if (view === 'home') {
    if (isOpen === false) {
      return (
        <nav role="banner navigation" aria-label="Main Navigation" className="header-home-mobile">
          <i onClick={() => setIsOpen(!isOpen)} className="fa fa-bars"></i>
        </nav>
      )
    } else if (isOpen === true) {
      return (
        <OpenBurger isOpen={isOpen} setIsOpen={setIsOpen} setView={setView}/>
      )
    }
  } else if (view === 'about') {
    if (isOpen === false) {
      return (
        <nav role="banner navigation" aria-label="Main Navigation" className="header-about-mobile">
          <i onClick={() => setIsOpen(!isOpen)} className="fa fa-bars"></i>
        </nav>
      )
    } else if (isOpen === true) {
      return (
        <OpenBurger isOpen={isOpen} setIsOpen={setIsOpen} setView={setView}/>
      )
    }
  } else if (view === 'projects') {
    if (isOpen === false) {
      return (
        <nav role="banner navigation" aria-label="Main Navigation" className="header-project-mobile">
          <i onClick={() => setIsOpen(!isOpen)} className="fa fa-bars"></i>
        </nav>
      )
    } else if (isOpen === true) {
      return (
        <OpenBurger isOpen={isOpen} setIsOpen={setIsOpen} setView={setView}/>
      )
    }
  } else if (view === 'contact') {
    if (isOpen === false) {
      return (
        <nav role="banner navigation" aria-label="Main Navigation" className="header-contact-mobile">
          <i onClick={() => setIsOpen(!isOpen)} className="fa fa-bars"></i>
        </nav>
      )
    } else if (isOpen === true) {
      return (
        <OpenBurger isOpen={isOpen} setIsOpen={setIsOpen} setView={setView}/>
      )
    }
  }
}

export default HamburgerNav