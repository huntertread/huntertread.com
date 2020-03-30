import React from 'react'
import './footer.css'

const Footer = ({ view }) => {
  if (view === "home") {
    return (
      <div className="footer-home">
        <a target="blank" href="https://github.com/huntertread">GH</a>
        <a target="blank" href="https://www.linkedin.com/in/huntertread/">LI</a>
      </div>
    )
  } else if (view === "about") {
    return (
      <div className="footer-about">
        <a target="blank" href="https://github.com/huntertread">GH</a>
        <a target="blank" href="https://www.linkedin.com/in/huntertread/">LI</a>
      </div>
    )
  } else if (view === 'projects') {
    return (
      <div className="footer-projects">
        <a target="blank" href="https://github.com/huntertread">GH</a>
        <a target="blank" href="https://www.linkedin.com/in/huntertread/">LI</a>
      </div>
    )
  } else if (view === 'contact') {
    return (
      <div className="footer-contact">
        <a target="blank" href="https://github.com/huntertread">GH</a>
        <a target="blank" href="https://www.linkedin.com/in/huntertread/">LI</a>
      </div>
    )
  }
}

export default Footer