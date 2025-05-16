import React, { Component } from 'react'
import './accordiondrawer.css'

// class AccordionDrawer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,
//       isOpen: false,
//       iconState: 'closed'
//     }
//     this.setIsOpen = this.setIsOpen.bind(this);
//     this.setIconState = this.setIconState.bind(this);
//     this.onClickOpen = this.onClickOpen.bind(this);
//     this.onKeyEnter = this.onKeyEnter.bind(this);
//   }

//   setIsOpen() {
//     this.setState({isOpen: !this.state.isOpen});
//   }

//   setIconState(state) {
//     this.setState({iconState: state})
//   }

//   onClickOpen() {
//     if (this.state.counter % 2 === 0) {
//       this.setIsOpen()
//       this.setIconState('open')
//       this.setState({counter: this.state.counter += 1})
//     } else {
//       this.setIsOpen()
//       this.setIconState('closed')
//       this.setState({counter: this.state.counter += 1})
//     }
//   }

//   onKeyEnter(event) {
//     if (event.key === 'Enter') {
//       if (this.state.counter % 2 === 0) {
//         this.setIsOpen()
//         this.setIconState('open')
//         this.setState({counter: this.state.counter += 1})
//       } else {
//         this.setIsOpen()
//         this.setIconState('closed')
//         this.setState({counter: this.state.counter += 1})
//       }
//     }
//   }

//   render() {

//     let accOpen = "";

//     if (this.state.isOpen === false) {
//       accOpen = "";
//     } else if (this.state.isOpen === true) {
//       accOpen = "open"
//     }

//     return (
//       <div>
//         <div className="accordion-header">
//           <p>{this.props.title}</p>
//           <i role="img" alt="icon, click or press to expand with additional content" id={this.state.iconState} className="fa fa-plus" onClick={this.onClickOpen} onKeyPress={this.onKeyEnter} tabIndex="0"></i>
//         </div>
//         <div className={`accordion-content ${accOpen}`}>
//           <ul className="accordion-list">
//             {this.props.content.map((item, i) => (<li>{item}</li>))}
//           </ul>
//           <a className="project-cta" href={this.props.link} target="blank" alt={`go to ${this.props.title} source code or live example`}>{this.props.cta}</a>
//         </div>
//       </div>
//     )
//   }
// }

// export default AccordionDrawer

class AccordionDrawer extends Component {
  constructor(props) {
    super(props);
    this.onClickOpen = this.onClickOpen.bind(this);
    this.onKeyEnter = this.onKeyEnter.bind(this);
  }

  onClickOpen() {
    this.props.toggleAccordion(this.props.id);
  }

  onKeyEnter(event) {
    if (event.key === 'Enter') {
      this.props.toggleAccordion(this.props.id);
    }
  }

  render() {
    const isOpen = this.props.activeId === this.props.id;
    const iconState = isOpen ? 'open' : 'closed';
    const accOpen = isOpen ? 'open' : '';

    return (
      <div>
        <div className="accordion-header">
          <p>{this.props.title}</p>
          <i
            role="img"
            alt="icon, click or press to expand with additional content"
            id={iconState}
            className="fa fa-plus"
            onClick={this.onClickOpen}
            onKeyPress={this.onKeyEnter}
            tabIndex="0"
          ></i>
        </div>
        <div className={`accordion-content ${accOpen}`}>
          <ul className="accordion-list">
            {this.props.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <a
            className="project-cta"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            alt={`go to ${this.props.title} source code or live example`}
          >
            {this.props.cta}
          </a>
        </div>
      </div>
    );
  }
}

export default AccordionDrawer;
