// import React, { Component } from 'react'
// import './accordiondrawer.css'

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

// class AccordionDrawer extends Component {
//   constructor(props) {
//     super(props);
//     this.onClickOpen = this.onClickOpen.bind(this);
//     this.onKeyEnter = this.onKeyEnter.bind(this);
//   }

  // onClickOpen() {
  //   this.props.toggleAccordion(this.props.id);
  // }

  // onClickOpen() {
  //   this.props.toggleAccordion(this.props.id);

    // Re-run Instagram embed processor if available
  //   setTimeout(() => {
  //     if (window.instgrm) {
  //       window.instgrm.Embeds.process();
  //     }
  //   }, 0);
  // }

  // onKeyEnter(event) {
  //   if (event.key === 'Enter') {
  //     this.props.toggleAccordion(this.props.id);
  //   }
  // }

  // render() {
  //   const isOpen = this.props.activeId === this.props.id;
  //   const iconState = isOpen ? 'open' : 'closed';
  //   const accOpen = isOpen ? 'open' : '';

  //   return (
  //     <div>
  //       <div className="accordion-header">
  //         <p>{this.props.title}</p>
  //         <i
  //           role="img"
  //           alt="icon, click or press to expand with additional content"
  //           id={iconState}
  //           className="fa fa-plus"
  //           onClick={this.onClickOpen}
  //           onKeyPress={this.onKeyEnter}
  //           tabIndex="0"
  //         ></i>
  //       </div>
  //       {/* <div className={`accordion-content ${accOpen}`}>
  //         <ul className="accordion-list">
  //           {this.props.content.map((item, i) => (
  //             <li key={i}>{item}</li>
  //           ))}
  //         </ul>
  //         <a
  //           className="project-cta"
  //           href={this.props.link}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           alt={`go to ${this.props.title} source code or live example`}
  //         >
  //           {this.props.cta}
  //         </a>
  //       </div> */}
  //       <div className={`accordion-content ${accOpen}`}>
  //         {/* If content is an array, render list. If string, treat as embed */}
  //         {Array.isArray(this.props.content) ? (
  //           <ul className="accordion-list">
  //             {this.props.content.map((item, i) => (
  //               <li key={i}>{item}</li>
  //             ))}
  //           </ul>
  //         ) : (
  //           <div
  //             className="instagram-embed"
  //             dangerouslySetInnerHTML={{ __html: this.props.content }}
  //           />
  //         )}
  //         <a
  //           className="project-cta"
  //           href={this.props.link}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           alt={`go to ${this.props.title} source code or live example`}
  //         >
  //           {this.props.cta}
  //         </a>
  //       </div>
  //     </div>
  //   );
  // }

// }

// export default AccordionDrawer;

import React, { Component } from "react";
import "./accordiondrawer.css";
import ProjectGallery from "../ProjectGallery/ProjectGallery";

class AccordionDrawer extends Component {
  constructor(props) {
    super(props);

    this.onClickOpen = this.onClickOpen.bind(this);
    this.onKeyEnter = this.onKeyEnter.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  onClickOpen() {
    this.props.toggleAccordion(this.props.id);

    // Re-process Instagram embeds when opening
    setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 0);
  }

  onKeyEnter(event) {
    if (event.key === "Enter") {
      this.onClickOpen();
    }
  }

  renderContent() {
    switch (this.props.type) {
      case "gallery":
        return (
          <ProjectGallery
            images={this.props.images}
            bullets={this.props.bullets}
          />
        );

      case "instagram":
        return (
          <div
            className="instagram-embed"
            dangerouslySetInnerHTML={{
              __html: this.props.content
            }}
          />
        );

      case "list":
      default:
        return (
          <ul className="accordion-list">
            {this.props.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
    }
  }

  render() {
    const isOpen = this.props.activeId === this.props.id;

    return (
      <div className="accordion-drawer">
        <div className="accordion-header">
          <p>{this.props.title}</p>

          <i
            role="button"
            aria-label={`Toggle ${this.props.title}`}
            className={`fa ${
              isOpen ? "fa-minus" : "fa-plus"
            }`}
            onClick={this.onClickOpen}
            onKeyDown={this.onKeyEnter}
            tabIndex="0"
          />
        </div>

        <div className={`accordion-content ${isOpen ? "open" : ""}`}>
          {this.renderContent()}

          {this.props.link && (
            <a
              className="project-cta"
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.cta}
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default AccordionDrawer;