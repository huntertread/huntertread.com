import React, { useState } from 'react'
import OpenBurger from './OpenBurger/OpenBurger'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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

  let burger;

  if (isOpen === false) {
    burger = null;
  } else if (isOpen === true) {
    burger =
      <CSSTransition
        key="1"
        classNames="nav-transition"
        timeout={{ enter: 500, exit: 300 }}>
          <div className="burger-container">
            <OpenBurger isOpen={isOpen} setIsOpen={setIsOpen} setView={setView} view={view}/>;
          </div>
      </CSSTransition>
  }

  return (
    <div>
      <nav role="banner navigation" aria-label="main navigation" className={viewClass}>
        <i onClick={() => setIsOpen(!isOpen)} className="fa fa-bars"></i>
      </nav>
      <TransitionGroup>
        {burger}
      </TransitionGroup>
    </div>
  )
}

export default HamburgerNav