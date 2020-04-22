import React, { useState } from 'react'
import './accordiondrawer.css'

let counter = 0; // global variable, how to make this counter work per component??

const AccordionDrawer = ({title, content, link, cta}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [iconState, setIconState] = useState('closed')

  const onClickOpen = () => {
    if (counter % 2 === 0) {
      setIsOpen(!isOpen)
      setIconState('open')
      counter++
    } else {
      setIsOpen(!isOpen)
      setIconState('closed')
      counter++
    }
  }

  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      if (counter % 2 === 0) {
        setIsOpen(!isOpen)
        setIconState('open')
        counter++
      } else {
        setIsOpen(!isOpen)
        setIconState('closed')
        counter++
      }
    }
  }

  let accOpen = "";

  if (isOpen === false) {
    accOpen = "";
  } else if (isOpen === true) {
    accOpen = "open"
  }

  let projectList;

  if (content.length === 1) {
    projectList = 
      <ul className="accordion-list">
        <li>{content[0]}</li>
      </ul>
  } else if (content.length === 2) {
    projectList = 
      <ul className="accordion-list">
        <li>{content[0]}</li>
        <li>{content[1]}</li>
      </ul>
  } else if (content.length === 3) {
    projectList = 
      <ul className="accordion-list">
        <li>{content[0]}</li>
        <li>{content[1]}</li>
        <li>{content[2]}</li>
      </ul>
  } else if (content.length === 4) {
    projectList = 
      <ul className="accordion-list">
        <li>{content[0]}</li>
        <li>{content[1]}</li>
        <li>{content[2]}</li>
        <li>{content[3]}</li>
      </ul>
  } else if (content.length === 5) {
    projectList = 
      <ul className="accordion-list">
        <li>{content[0]}</li>
        <li>{content[1]}</li>
        <li>{content[2]}</li>
        <li>{content[3]}</li>
        <li>{content[4]}</li>
      </ul>
  }

  return (
    <div>
      <div className="accordion-header">
        <p>{title}</p>
        <i role="img" alt="icon, click or press to expand with additional content" id={iconState} className="fa fa-plus" onClick={onClickOpen} onKeyPress={onKeyEnter} tabIndex="0"></i>
      </div>
      <div className={`accordion-content ${accOpen}`}>
        {projectList}
        <a className="project-cta" href={link} target="blank" alt={`go to ${title} source code or live example`}>{cta}</a>
      </div>
    </div>
  )
}

export default AccordionDrawer