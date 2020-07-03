import React from 'react'
import './about.css'

const About = () => {
  return (
    <main role="main" id="about-section" className="about">
      <h1>ABOUT</h1>
      <div className="about-content">
        <h3 className="about-headline">Hunter is a Full Stack Software Engineer in Los Angeles, CA. He enjoys building responsive UIs with performant, modular code.</h3>
        <p>JavaScript | HTML5 | CSS3</p>
        <p>React | Redux | Node | React-Native | ViroReact | jQuery</p>
        <p>Styled-Components | SASS | SCSS</p>
        <p>Jest | Enzyme | Mocha | Chai</p>
        <p>MySQL | PostgreSQL | MongoDB</p>
        <p>AWS EC2 | S3 | Route53</p>
      </div>
      <a href="./downloadFiles/Hunter_Treadaway_Software_Engineering_Resume.pdf" download>Download Resume</a>
      <p alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters" className="character-container">yuyuy</p>
    </main>
  )
}

export default About