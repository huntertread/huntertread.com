import React from 'react'
import AccordionDrawer from './AccordionDrawer/AccordionDrawer'
import './projects.css'

const Projects = () => {

  const projectDetails = [
    {
      title: 'huntertreadaway.com',
      link: 'https://github.com/huntertread/personal-site',
      cta: 'View Code On GitHub',
      alt: 'hunter treadaway personal site project details',
      content: [
        'React JS',
        'Mobile first design',
        'WCAG Compliant',
        'Unit tested with Jest'
      ]
    },
    {
      title: 'three.js demo',
      link: 'https://huntertread.github.io/threejsdemo/',
      cta: 'Go To Project',
      alt: 'three.js demo project details',
      content: [
        'three.js demo site'
      ]
    },
    {
      title: 'system design capstone',
      link: 'https://github.com/SDC-Designer-Designers/search-bar-booking-tool',
      cta: 'View Code on GitHub',
      alt: 'system design capstone project details',
      content: [
        'Optimized the back end of an inherited microservice component.',
        'Generated and seeded 20 Million simulated property records to MongoDB hosted on t2.micro.',
        'Horizontally scaled proxy server layer to 3 separate t2.micro instances.',
        'Utilized NGINX and round-robin technique to load balance throughput of test loads from Loader.io.',
        'Achieved an average of 3000 RPS (up from benchmark of ~100 RPS) with 80ms latency (down from benchmark of ~1000ms) and less than 1% error rate.'
      ]
    }
  ]

  return (
    <main role="main" id="project-section" className="projects">
      <h1>PROJECTS</h1>
      <div className="projects-content">
        {
          projectDetails.map((project, i) => (<AccordionDrawer key={i} alt={project.alt} title={project.title} content={project.content} link={project.link} cta={project.cta} />))
        }
      </div>
      <p className="character-container" alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters">hunter</p>
    </main>
  )
}

export default Projects