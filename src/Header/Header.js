import React from 'react'
import './header.css'

const Header = ({ setView }) => {
  return (
    <div className="header">
      <button onClick={() => setView('home')}>Home</button>
      <button onClick={() => setView('about')}>About</button>
      <button onClick={() => setView('projects')}>Projects</button>
      <button onClick={() => setView('contact')}>Contact</button>
    </div>
  )
}

export default Header