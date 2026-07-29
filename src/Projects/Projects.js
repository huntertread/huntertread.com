import React from 'react'
import AccordionDrawer from './AccordionDrawer/AccordionDrawer'
import AccordionContainer from './AccordionContainer/AccordionContainer'
import './projects.css'
import aztec from "./ProjectImages/aztec.jpg";
import homer from "./ProjectImages/homer.jpg";
import finalSculpt from "./ProjectImages/finalsculpt.jpg";
import glowFinal from "./ProjectImages/glowfinal.jpg";
import readyShip from "./ProjectImages/readyship.jpg";
import prototype from "./ProjectImages/prototype.jpg";
import tinMold from "./ProjectImages/tinmold.jpg";
import waxHead from "./ProjectImages/waxhead.jpg";
import preWax from "./ProjectImages/prewax.jpg";
import original from "./ProjectImages/original.jpg";
import rsahi from "./ProjectImages/rsahi.png";
import pmg from "./ProjectImages/pmg.png";

const Projects = () => {

  const projectDetails = [
    {
      title: 'Soft Vinyl Toy - Concept to Production',
      cta: 'Buy From Me',
      alt: 'custom soft vinyl toy',
      type: 'gallery',
      images: [
        aztec,
        finalSculpt,
        glowFinal,
        readyShip,
        prototype,
        tinMold,
        waxHead,
        preWax,
        original
      ],
      bullets: [
        <b>PROJECT</b>,
        'Independent Product Development',
        <b>ROLE</b>,
        'Creator | Producer | Product Designer',
        <b>CHALLENGE</b>,
        'Create and launch an original collectible while independently managing design, manufacturing, branding, and fulfillment.',
        <b>SOLUTION</b>,
        'Hand-sculpted the prototype, partnered with a manufacturer in Mexico, designed custom packaging, and coordinated production through launch.',
        <b>OUTCOME</b>,
        'Transformed an original concept into a finished collectible product sold directly to customers through Instagram.',
        <b>CAPABILITIES</b>,
        'Clay Sculpting | Manufacturing Coordination | Packaging Design | Product Photography | Instagram'
      ]
    },
    {
      title: 'Pat McGrath Labs - Digital Experience Development',
      link: 'https://patmcgrath.com/pages/shadefinder',
      cta: 'Go To PMG Shadefinder',
      alt: 'pat mcgrath website link',
      type: 'gallery',
      images: [
        pmg
      ],
      bullets: [
        <b>PROJECT</b>,
        'E-commerce Website Development',
        <b>ROLE</b>,
        'Front-End Developer',
        <b>CHALLENGE</b>,
        'Translate premium creative designs into responsive, production-ready web experiences.',
        <b>SOLUTION</b>,
        'Collaborated with designers and developers to implement responsive interfaces while maintaining design fidelity across devices.',
        <b>OUTCOME</b>,
        'Supported the delivery of polished customer-facing experiences for a globally recognized beauty brand.',
        <b>TOOLS</b>,
        'Shopify | Liquid | SCSS | React | jQuery | Git'
      ]
    },
    {
      title: 'Rutgers Research Lab - Design, Development, Deployment',
      link: 'https://raziasahi.com',
      cta: 'View Site',
      alt: 'razia sahi personal website',
      type: 'gallery',
      images: [
        rsahi
      ],
      bullets: [
        <b>PROJECT</b>,
        'Research Lab Website',
        <b>ROLE</b>,
        'Project Lead | Designer | Developer',
        <b>CHALLENGE</b>,
        'Create a professional research website that could be easily maintained by future lab managers with limited development experience.',
        <b>SOLUTION</b>,
        'Designed a lightweight codebase with minimal JavaScript, configured the domain through Amazon Route 53, and deployed the site using GitHub Pages.',
        <b>OUTCOME</b>,
        'Created a sustainable digital platform that communicates complex research while enabling simple long-term maintenance.',
        <b>TOOLS</b>,
        'HTML | CSS | jQuery | GitHub Pages | Amazon Route 53'
      ]
    },
    {
      title: 'Personal Portfolio - Design, Development, Deployment',
      link: 'https://github.com/huntertread/personal-site',
      cta: 'View Code On GitHub',
      alt: 'hunter treadaway personal site project details',
      type: 'list',
      content: [
        <b>PROJECT</b>,
        'Personal Brand Website',
        <b>ROLE</b>,
        'Creative Director | Designer | Developer',
        <b>CHALLENGE</b>,
        'Create a digital portfolio that represents a multidisciplinary background across project management, development, and creative production.',
        <b>SOLUTION</b>,
        'Designed and developed a minimalist React application, managed domain configuration through Amazon Route 53, and deployed the site using GitHub Pages.',
        <b>OUTCOME</b>,
        'Built a continuously evolving platform showcasing creative projects, technical skills, and end-to-end ownership.',
        <b>TOOLS</b>,
        'React | JavaScript | HTML | CSS | GitHub Pages | Amazon Route 53'
      ]
    }
    // {
    //   title: 'Artistic Pursuits',
    //   link: 'https://www.instagram.com/protozoasaur/',
    //   cta: 'Go To Protozoasaur',
    //   alt: 'protozoasaur instagram feed',
    //   type: 'instagram',
    //   content: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/protozoasaur/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/protozoasaur/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this profile on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">@<a href="https://www.instagram.com/protozoasaur/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank">protozoasaur</a> • Instagram photos and videos</p></div></blockquote>`
    // },
    // {
    //   title: 'theoog.net',
    //   link: 'https://theoog.net',
    //   cta: 'Go To Project',
    //   alt: 'the oog url shortener project details',
    //   content: [
    //     'React | Redux | Node | Express | PostgreSQL',
    //     'Web server, database, reverse proxy and Node server on distributed EC2 instances',
    //     'Restful API on theoog.net subdomain',
    //     'Test suites in Jest/Enzyme and Mocha/Chai',
    //     'Responsive front end'
    //   ]
    // },
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
      <div className="projects-content">
        <AccordionContainer projectDetails={projectDetails} />
      </div>
      <p className="character-container" alt="a custom font is used which transforms alpha-numeric characters in to pixel monsters">.</p>
    </main>
  )
}

export default Projects