import React from 'react'
import './about.css'

const About = () => {
  return (
    <main role="main" id="about-section" className="about">
      <h1>ABOUT</h1>
      <div className="about-content">
        <h3 className="about-headline">Hunter is a Project Manager in Princeton, NJ.</h3>
        {/* <p>JavaScript | HTML5 | CSS3 | Bash</p>
        <p>React | Redux | Node | jQuery</p>
        <p>Styled-Components | SASS | SCSS</p>
        <p>Jest | Enzyme | Mocha | Chai</p>
        <p>MySQL | PostgreSQL | MongoDB</p>
        <p>AWS EC2 | S3 | Route53</p> */}
        <p>Certified Scrum Master. Fluent in Agile, Scrum, Waterfall</p>
        <p>Jira, Asana, Trello. Comfortable with any PM tool</p>
        <p>5 Years Experience in Digital Advertising</p>
        <p>5 Years Experience in FinTech</p>
        <p>10 years managing or working in development teams</p>
        <p>10 years delivering in high pressure environments</p>
        {/* <p>Hunter is calmer than a Fruitger Aero playlist</p> */}
        {/* <p>Yes, he IS a project manager but he's also so much more</p>
        <p>He is a <a href="https://www.instagram.com/protozoasaur/" target="blank">multi-media artist</a> with front end development experience</p>
        <p>Hunter likes to do it all, he doesnt want to be put in a box</p>
        <p>Hunter wants to break free of the norm</p>
        <p>Hunter is calmer than a Frutiger Aero playlist</p>
        <p>He's also super kind and easy to work with (check out his LI refs)</p> */}
      </div>
      <a href="./downloadFiles/Hunter_Treadaway_Front_End_Software_Engineer.pdf" target="blank" >Resume</a>
      <p alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters" className="character-container">55</p>
    </main>
  )
}

export default About