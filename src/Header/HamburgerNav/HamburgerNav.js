import React, { useState, useEffect } from 'react'
import OpenBurger from './OpenBurger/OpenBurger'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './hamburgernav.css'

const HamburgerNav = ({ view, setView }) => {

  const [isOpen, setIsOpen] = useState(false)

  /*
    Prevent background scrolling when mobile menu is open
  */
  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup if component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }

  }, [isOpen])


  let viewClass = null

  if (view === 'home') {
    viewClass = 'header-home-mobile'
  } else if (view === 'about') {
    viewClass = 'header-about-mobile'
  } else if (view === 'projects') {
    viewClass = 'header-project-mobile'
  } else if (view === 'contact') {
    viewClass = 'header-contact-mobile'
  }


  let burger

  if (isOpen === false) {
    burger = null
  } else {
    burger =
      <CSSTransition
        key="1"
        classNames="nav-transition"
        timeout={{ enter: 500, exit: 300 }}
      >
        <div className="burger-container">
          <OpenBurger
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setView={setView}
            view={view}
          />
        </div>
      </CSSTransition>
  }


  return (
    <div>
      <nav
        role="banner navigation"
        aria-label="main navigation"
        className={viewClass}
      >
        <i
          onClick={() => setIsOpen(!isOpen)}
          className="fa fa-bars"
          aria-label="Open navigation menu"
        />
      </nav>

      <TransitionGroup>
        {burger}
      </TransitionGroup>
    </div>
  )
}

export default HamburgerNav