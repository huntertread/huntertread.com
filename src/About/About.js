import React from 'react'
import './about.css'

const About = () => {
  return (
    <div id="about-section" className="about">
      <h1>ABOUT</h1>
      <h2>hunter is a human from earth who likes to make things with:</h2>
      <p>JavaScript | HTML5 | CSS3 | Python | Bash</p>
      <p>React | React-Native | ViroReact | Styled-Components | D3 | jQuery | node.js</p>
      <p>MySQL | PostgreSQL | MongoDB</p>
      <p>windows | linux | mac</p>
      <p>spray-paint</p>
      <img src={require("../img/GestationCrateCrop.png")} alt="human sow nurses her young in a gestation crate" />
    </div>
  )
}

export default About