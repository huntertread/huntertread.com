import React from 'react'
import './about.css'

const About = () => {
  return (
    <main role="main" id="about-section" className="about">
      <h1>ABOUT</h1>
      <div className="about-content">
        <h3 className="about-headline">Project Manager in Metro NYC.</h3>
        <p>Digital Product Delivery | Technical Execution | Cross-Functional Leadership</p>
        <p>Certified ScrumMaster experienced in Agile, Scrum, and hybrid delivery environments.</p>
        <p>10+ years delivering software and digital products alongside designers, developers, QA teams, and business stakeholders.</p>
        <p>Led projects across digital advertising, FinTech, and independent product development.</p>
        <p>Experienced with Jira, Asana, Trello, GitHub, and modern product delivery workflows.</p>
      </div>
      <a href="./downloadFiles/Hunter Treadaway - Project Manager.pdf" target="blank" >Resume</a>
      <p alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters" className="character-container">55</p>
    </main>
  )
}

export default About