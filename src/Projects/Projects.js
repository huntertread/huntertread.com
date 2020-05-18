import React from 'react'
import AccordionDrawer from './AccordionDrawer/AccordionDrawer'
import './projects.css'

const Projects = () => {

  const projectDetails = [
    {
      title: 'huntertread.com',
      link: 'https://github.com/huntertread/personal-site',
      cta: 'View Code On GitHub',
      alt: 'hunter treadaway personal site project details',
      content: [
        'React Hooks',
        'Responsive design',
        'WCAG Compliant',
        'Unit tested with Jest',
        'Google Analytics'
      ]
    },
    {
      title: 'theoog.net, URL Shortener',
      link: 'https://theoog.net',
      cta: 'Go To Project',
      alt: 'the oog url shortener project details',
      content: [
        'React | Node | PostgreSQL',
        'Back end on AWS EC2 and reverse proxied with NGINX',
        'Architected to easily scale horizontally',
        'RESTful API on theoog.net subdomain',
        'Responsive front end design'
      ]
    },
    {
      title: 'microservice optimization',
      link: 'https://github.com/SDC-Designer-Designers/search-bar-booking-tool',
      cta: 'View Code on GitHub',
      alt: 'system design capstone project details',
      content: [
        'Optimized the back end of an inherited microservice.',
        'Generated and seeded 20 Million records to MongoDB hosted on t2.micro to test against.',
        'Horizontally scaled proxy server layer to 3 t2.micro instances.',
        'Utilized NGINX to load balance throughput of test loads from Loader.io.',
        'Achieved an average of 3000 RPS (up from benchmark of ~100 RPS) with 80ms latency (down from benchmark of ~1000ms) and less than 1% error rate.'
      ]
    },
    {
      title: 'three.js demo',
      link: 'https://huntertread.github.io/threejsdemo/',
      cta: 'Go To Project',
      alt: 'three.js demo project details',
      content: [
        'UNDER CONSTRUCTION',
        'three.js demo site'
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