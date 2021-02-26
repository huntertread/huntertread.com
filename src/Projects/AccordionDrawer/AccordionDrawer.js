import React, { Component } from 'react'
import './accordiondrawer.css'

class AccordionDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isOpen: false,
      iconState: 'closed'
    }
    this.setIsOpen = this.setIsOpen.bind(this);
    this.setIconState = this.setIconState.bind(this);
    this.onClickOpen = this.onClickOpen.bind(this);
    this.onKeyEnter = this.onKeyEnter.bind(this);
  }

  setIsOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  setIconState(state) {
    this.setState({iconState: state})
  }

  onClickOpen() {
    if (this.state.counter % 2 === 0) {
      this.setIsOpen()
      this.setIconState('open')
      this.setState({counter: this.state.counter += 1})
    } else {
      this.setIsOpen()
      this.setIconState('closed')
      this.setState({counter: this.state.counter += 1})
    }
  }

  onKeyEnter(event) {
    if (event.key === 'Enter') {
      if (this.state.counter % 2 === 0) {
        this.setIsOpen()
        this.setIconState('open')
        this.setState({counter: this.state.counter += 1})
      } else {
        this.setIsOpen()
        this.setIconState('closed')
        this.setState({counter: this.state.counter += 1})
      }
    }
  }

  render() {

    let accOpen = "";

    if (this.state.isOpen === false) {
      accOpen = "";
    } else if (this.state.isOpen === true) {
      accOpen = "open"
    }

    // let projectList;

    // projectList = this.props.content.map((item, i) => (<li>{item}</li>))

    // if (this.props.content.length === 1) {
    //   projectList =
    //     <ul className="accordion-list">
    //       <li>{this.props.content[0]}</li>
    //     </ul>
    // } else if (this.props.content.length === 2) {
    //   projectList =
    //     <ul className="accordion-list">
    //       <li>{this.props.content[0]}</li>
    //       <li>{this.props.content[1]}</li>
    //     </ul>
    // } else if (this.props.content.length === 3) {
    //   projectList =
    //     <ul className="accordion-list">
    //       <li>{this.props.content[0]}</li>
    //       <li>{this.props.content[1]}</li>
    //       <li>{this.props.content[2]}</li>
    //     </ul>
    // } else if (this.props.content.length === 4) {
    //   projectList =
    //     <ul className="accordion-list">
    //       <li>{this.props.content[0]}</li>
    //       <li>{this.props.content[1]}</li>
    //       <li>{this.props.content[2]}</li>
    //       <li>{this.props.content[3]}</li>
    //     </ul>
    // } else if (this.props.content.length === 5) {
    //   projectList =
    //     <ul className="accordion-list">
    //       <li>{this.props.content[0]}</li>
    //       <li>{this.props.content[1]}</li>
    //       <li>{this.props.content[2]}</li>
    //       <li>{this.props.content[3]}</li>
    //       <li>{this.props.content[4]}</li>
    //     </ul>
    // }

    return (
      <div>
        <div className="accordion-header">
          <p>{this.props.title}</p>
          <i role="img" alt="icon, click or press to expand with additional content" id={this.state.iconState} className="fa fa-plus" onClick={this.onClickOpen} onKeyPress={this.onKeyEnter} tabIndex="0"></i>
        </div>
        <div className={`accordion-content ${accOpen}`}>
          <ul className="accordion-list">
            {this.props.content.map((item, i) => (<li>{item}</li>))}
          </ul>
          {/* {projectList} */}
          <a className="project-cta" href={this.props.link} target="blank" alt={`go to ${this.props.title} source code or live example`}>{this.props.cta}</a>
        </div>
      </div>
    )
  }
}

export default AccordionDrawer