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

  let accOpen = "";

  if (isOpen === false) {
    accOpen = "";
  } else if (isOpen === true) {
    accOpen = "open"
  }

  return (
    <div>
      <div className="accordion-header">
        <p>{title}</p>
        <i id={iconState} className="fa fa-plus" onClick={onClickOpen}></i>
      </div>
      <div className={`accordion-content ${accOpen}`}>
        <p>{content}</p>
        <a className="project-cta" href={link} target="blank" alt={`go to ${title} source code or live example`}>{cta}</a>
      </div>
    </div>
  )
}

export default AccordionDrawer