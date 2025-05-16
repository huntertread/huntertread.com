import React, { Component } from 'react';
import AccordionDrawer from '../AccordionDrawer/AccordionDrawer';

// class AccordionContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeId: null
//     };
//     this.toggleAccordion = this.toggleAccordion.bind(this);
//   }

//   toggleAccordion(id) {
//     this.setState((prevState) => ({
//       activeId: prevState.activeId === id ? null : id
//     }));
//   }

//   render() {
//     const data = [
//       {
//         id: 1,
//         title: 'Accordion One',
//         content: ['Item A', 'Item B'],
//         link: '#',
//         cta: 'View More'
//       },
//       {
//         id: 2,
//         title: 'Accordion Two',
//         content: ['Item C', 'Item D'],
//         link: '#',
//         cta: 'Check it Out'
//       }
//     ];

//     return (
//       <div>
//         {data.map((item) => (
//           <AccordionDrawer
//             key={item.id}
//             id={item.id}
//             title={item.title}
//             content={item.content}
//             link={item.link}
//             cta={item.cta}
//             activeId={this.state.activeId}
//             toggleAccordion={this.toggleAccordion}
//           />
//         ))}
//       </div>
//     );
//   }
// }

class AccordionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(id) {
    this.setState((prevState) => ({
      activeId: prevState.activeId === id ? null : id
    }));
  }

  render() {
    return (
      <>
        {this.props.projectDetails.map((project, i) => (
          <AccordionDrawer
            key={i}
            id={i}
            title={project.title}
            content={project.content}
            link={project.link}
            cta={project.cta}
            activeId={this.state.activeId}
            toggleAccordion={this.toggleAccordion}
          />
        ))}
      </>
    );
  }
}

export default AccordionContainer;
