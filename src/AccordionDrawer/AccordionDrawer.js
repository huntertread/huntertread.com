import React, { useState } from 'react'
import './accordiondrawer.css'

let counter = 0;

const AccordionDrawer = ({title, content, link}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [iconState, setIconState] = useState('closed')

  let accContent = null;

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

  if (isOpen === true) {
    accContent =
      <div className="accordion-content">
        <p>{content}</p>
        <a className="project-cta" href={link} target="blank" alt={`go to ${title} source code or live example`}>Go to content source</a>
      </div>
  }

  return (
    <div>
    <div className="accordion-header">
      <p>{title}</p>
      <i id={iconState} className="fa fa-plus" onClick={onClickOpen}></i>
    </div>
      <div>{accContent}</div>
    </div>

  )
}

export default AccordionDrawer