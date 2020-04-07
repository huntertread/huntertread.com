import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './accordiondrawer.css'

let counter = 0;

const AccordionDrawer = ({title, content, link, cta}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [iconState, setIconState] = useState('closed')

  let accContent = false;

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

  if (isOpen === false) {
    accContent = null;
  } else if (isOpen === true) {
    accContent =
      <div className="accordion-content">
        <p>{content}</p>
        <a className="project-cta" href={link} target="blank" alt={`go to ${title} source code or live example`}>{cta}</a>
      </div>
  }

  return (
    <div>
    <div className="accordion-header">
      <p>{title}</p>
      <i id={iconState} className="fa fa-plus" onClick={onClickOpen}></i>
    </div>
      <div>
        <ReactCSSTransitionGroup
          className="carousel-inner"
          transitionName="carouselShift"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={50}
          transitionLeaveTimeout={50}>
        {accContent}
        </ReactCSSTransitionGroup>
      </div>
    </div>

  )
}

export default AccordionDrawer