import React, { Component } from 'react';
import AccordionDrawer from '../AccordionDrawer/AccordionDrawer';

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
              type={project.type}
              content={project.content}
              images={project.images}
              bullets={project.bullets}
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
