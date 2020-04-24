import React from 'react'
import './about.css'

const About = () => {
  return (
    <main role="main" id="about-section" className="about">
      <h1>ABOUT</h1>
      <div className="about-content">
        <h3 className="about-headline">Hunter is a Web Developer in Los Angeles, CA. He enjoys building responsive and modern UIs with test-driven, performant, and modular code.</h3>
        <p>JavaScript | HTML5 | CSS3 | PHP | Bash</p>
        <p>React | React-Native | ViroReact | Styled-Components | D3 | jQuery | Node.js</p>
        <p>Jest | Mocha | Chai</p>
        <p>MySQL | PostgreSQL | MongoDB</p>
        <p>AWS EC2 | S3 | Route53</p>
      </div>
      <a href="./downloadFiles/Hunter_Treadaway_Software_Engineering_Resume.pdf" download>Download Resume</a>
      <p alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters" className="character-container">yuyuy</p>
    </main>
  )
}

export default About