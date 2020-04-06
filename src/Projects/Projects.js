import React from 'react'
import AccordionDrawer from '../AccordionDrawer/AccordionDrawer'
import './projects.css'

const Projects = () => {
  
  const htContent = 'this website right here!'
  const htLink = ''
  const htCta = 'View source-code on GitHub'

  const threeContent = 'a fancy three.js project'
  const threeLink = ''
  const threeCta = 'Go To Project'

  const ecommContent = 'a sampling of e-commerce components in the neumorphic design style'
  const ecommLink = 'https://github.com/huntertread/e-comm-components'
  const ecommCta = 'Go To Project'

  const sysDisContent = 
    'Optimized the back end of an inherited microservice component. ' 
    + 'Generated and seeded 20 Million simulated property records to MongoDB hosted on t2.micro. ' 
    + 'Horizontally scaled proxy server layer to 3 separate t2.micro instances. '
    + 'Utilized NGINX and round-robin technique to load balance throughput of test loads from Loader.io. '
    + 'Achieved an average of 3000 RPS (up from benchmark of ~100 RPS) with 80ms latency (down from benchmark of ~1000ms) and less than 1% error rate. '
  const sysDisLink = 'https://github.com/SDC-Designer-Designers/search-bar-booking-tool'
  const sysDisCta = 'View source-code on GitHub'

  return (
    <main role="main" id="project-section" className="projects">
      <h1>PROJECTS</h1>
      <div className="projects-content">
        <AccordionDrawer title={'huntertreadaway.com'} content={htContent} link={htLink} cta={htCta} />
        <AccordionDrawer title={'unknown three.js projects'} content={threeContent} link={threeLink} cta={threeCta} />
        <AccordionDrawer title={'e-comm components'} content={ecommContent} link={ecommLink} cta={ecommCta} />
        <AccordionDrawer title={'system design capstone'} content={sysDisContent} link={sysDisLink} cta={sysDisCta} />
      </div>
      <p className="character-container">hunter</p>
    </main>
  )
}

export default Projects