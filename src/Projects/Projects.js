import React from 'react'
import AccordionDrawer from '../AccordionDrawer/AccordionDrawer'
import './projects.css'

const Projects = () => {
  
  const htContent = 'this website right here! font is sourced from a classic NES game called Holy Diver'
  const htLink = ''

  const threeContent = 'a fancy three.js project'
  const threeLink = ''

  const ecommContent = 'a sampling of e-commerce components in the neumorphic design style'
  const ecommLink = 'https://github.com/huntertread/e-comm-components'

  const sysDisContent = 'took inherited code base and optimized all HTTP requests to achieve the following results:'
  const sysDisLink = 'https://github.com/SDC-Designer-Designers/search-bar-booking-tool'

  return (
    <div id="project-section" className="projects">
      <h1>PROJECTS</h1>
      <div className="projects-content">
        <AccordionDrawer title={'huntertreadaway.com'} content={htContent} link={htLink} />
        <AccordionDrawer title={'unknown three.js projects'} content={threeContent} link={threeLink} />
        <AccordionDrawer title={'e-comm components'} content={ecommContent} link={ecommLink} />
        <AccordionDrawer title={'system design capstone'} content={sysDisContent} link={sysDisLink} />
      </div>
      <h2>hunter</h2>
    </div>
  )
}

export default Projects