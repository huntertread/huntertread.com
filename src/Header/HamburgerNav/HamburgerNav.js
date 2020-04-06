import React, { useState } from 'react'
import OpenBurger from './OpenBurger/OpenBurger'
import './hamburgernav.css'

const HamburgerNav = ({ view, setView }) => {

  const [isOpen, setIsOpen] = useState(false)

  let viewClass = null

  if (view === 'home') {
    viewClass = 'header-home-mobile'
  } else if ( view === 'about') {
    viewClass = 'header-about-mobile'
  } else if (view === 'projects') {
    viewClass = 'header-project-mobile'
  } else if (view === 'contact') {
    viewClass = 'header-contact-mobile'
  }

  if (isOpen === false) {
    return (
      <nav role="banner navigation" aria-label="Main Navigation" className={viewClass}>
        <i onClick={() => setIsOpen(!isOpen)} className="fa fa-bars"></i>
      </nav>
    )
  } else if (isOpen === true) {
    return (
      <OpenBurger isOpen={isOpen} setIsOpen={setIsOpen} setView={setView} view={view}/>
    )
  }
}

export default HamburgerNav