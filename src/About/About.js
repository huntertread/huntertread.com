import React from 'react'
import './about.css'

const About = () => {
  return (
    <main role="main" id="about-section" className="about">
      <h1>ABOUT</h1>
      <div className="about-content">
        <h3 className="about-headline">Hunter is a web developer residing in Los Angeles, CA. He aims to surprise users with unexpected interactions and design choices. He enjoys working with:</h3>
        <p>JavaScript | HTML5 | CSS3</p>
        <p>React | React-Native | ViroReact | Styled-Components | D3 | jQuery | Node.js</p>
        <p>MySQL | PostgreSQL | MongoDB</p>
        <p>Windows | Linux | Mac</p>
      </div>
      <a href="./downloadFiles/Hunter_Treadaway_Software_Engineering_Resume.pdf" download>Download Resume</a>
      <p alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters" className="character-container">yuyuy</p>
    </main>
  )
}

export default About