import React from 'react'
import './about.css'

const About = () => {
  return (
    <main role="main" id="about-section" className="about">
      <h1>ABOUT</h1>
      <div className="about-content">
        <h3 className="about-headline">Hunter is a Creative Project Manager in Metro NYC.</h3>
        <p>He bridges the gap between creative vision and technical execution, helping teams transform ideas into digital products and experiences.</p>
        <p>Creative Project Manager | Digital Product Delivery | Cross-Functional Operations</p>
        <p>Certified ScrumMaster experienced in Agile, Scrum, and hybrid delivery environments.</p>
        <p>10+ years partnering with designers, developers, QA teams, and business stakeholders.</p>
        <p>5 years in digital advertising.</p>
        <p>5 years in FinTech.</p>
        <p>10 years delivering complex projects in fast-paced environments.</p>
        <p>Experienced with Jira, Asana, Trello, and modern product workflows.</p>
      </div>
      <a href="./downloadFiles/Hunter Treadaway - Creative Project Manager.pdf" target="blank" >Resume</a>
      <p alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters" className="character-container">55</p>
    </main>
  )
}

export default About