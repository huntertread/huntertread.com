import React from 'react'
import AccordionDrawer from './AccordionDrawer/AccordionDrawer'
import AccordionContainer from './AccordionContainer/AccordionContainer'
import './projects.css'

const Projects = () => {

  const projectDetails = [
    {
      title: 'patmcgrath.com',
      link: 'https://patmcgrath.com/pages/shadefinder',
      cta: 'Go To PMG Shadefinder',
      alt: 'pat mcgrath website link',
      content: [
        'Shopify | Liquid | SCSS | React | jQuery | Git',
        'On-going freelance contract',
        'Work in a collaborative team environment to deliver new product features and enhancements',
        'Shadefinder Quiz Modal - react app to help users find their shade of concealer and/or foundation'
      ]
    },
    {
      title: 'theoog.net',
      link: 'https://theoog.net',
      cta: 'Go To Project',
      alt: 'the oog url shortener project details',
      content: [
        'React | Redux | Node | Express | PostgreSQL',
        'Web server, database, reverse proxy and Node server on distributed EC2 instances',
        'Restful API on theoog.net subdomain',
        'Test suites in Jest/Enzyme and Mocha/Chai',
        'Responsive front end'
      ]
    },
    // {
    //   title: 'mrzmedical.com',
    //   link: 'http://mrzmedical.com',
    //   cta: 'Go to MRZ Medical',
    //   alt: 'MRZ Medical Wordpress Site',
    //   content: [
    //     'Updated existing Wordpress theme with Covid-19 components',
    //     'Added Patient Education and Forms pages',
    //     'Refactored site to be mobile friendly with custom Media Queries',
    //     'Fixed broken contact form and "Patient Portal" CTA on homepage'
    //   ]
    // },
    // {
    //   title: 'huntertread.com',
    //   link: 'https://github.com/huntertread/personal-site',
    //   cta: 'View Code On GitHub',
    //   alt: 'hunter treadaway personal site project details',
    //   content: [
    //     'React Hooks',
    //     'Responsive design',
    //     'WCAG Compliant',
    //     'Unit tested with Jest/Enzyme',
    //     'Google Analytics'
    //   ]
    // },
    {
      title: 'raziasahi.com',
      link: 'https://raziasahi.com',
      cta: 'View Site',
      alt: 'razia sahi personal website',
      content: [
        'jQuery | HTML | CSS',
        'Responsive design'
      ]
    }
    // {
    //   title: 'microservice optimization',
    //   link: 'https://github.com/SDC-Designer-Designers/search-bar-booking-tool',
    //   cta: 'View Code on GitHub',
    //   alt: 'system design capstone project details',
    //   content: [
    //     'Optimized the back end of an inherited microservice.',
    //     'Generated and seeded 20 Million records to MongoDB to simulate enterprise level data set.',
    //     'Horizontally scaled proxy server layer to 3 t2.micro instances.',
    //     'Utilized NGINX to load balance throughput of test loads from Loader.io.',
    //     'Achieved an average of 3000 RPS (up from benchmark of ~100 RPS) with 80ms latency (down from benchmark of ~1000ms) and less than 1% error rate.'
    //   ]
    // }
    // {
    //   title: 'three.js demo',
    //   link: 'https://huntertread.github.io/threejsdemo/',
    //   cta: 'Go To Project',
    //   alt: 'three.js demo project details',
    //   content: [
    //     'UNDER CONSTRUCTION',
    //     'three.js demo site'
    //   ]
    // }
  ]

  return (
    <main role="main" id="project-section" className="projects">
      <h1>PROJECTS</h1>
      {/* <div className="projects-content">
        {
          projectDetails.map((project, i) => (<AccordionDrawer key={i} alt={project.alt} title={project.title} content={project.content} link={project.link} cta={project.cta} />))
        }
      </div> */}
      <div className="projects-content">
        <AccordionContainer projectDetails={projectDetails} />
      </div>
      <p className="character-container" alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters">.</p>
    </main>
  )
}

export default Projects