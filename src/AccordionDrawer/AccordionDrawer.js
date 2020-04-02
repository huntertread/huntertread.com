import React, { useState } from 'react'
import './accordiondrawer.css'

const AccordionDrawer = ({title, content, link}) => {

  const [isOpen, setIsOpen] = useState(false)

  if (isOpen === false) {
    return (
      <div className="accordion-header">
        <p>{title}</p>
        <span onClick={() => setIsOpen(!isOpen)}>+</span>
      </div>
    )
  } else if (isOpen === true) {
    return (
      <div className="accordion-drawer-open">
        <div className="accordion-header">
          <p>{title}</p>
          <span onClick={() => setIsOpen(!isOpen)}>x</span>
        </div>
        <p>{content}</p>
        <a className="project-cta" href={link} target="blank" alt={`go to ${title} source code or live example`}>Go to content source</a>
      </div>
    )
  }
}

export default AccordionDrawer