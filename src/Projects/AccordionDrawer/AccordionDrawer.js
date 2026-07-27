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
            id={isOpen ? "open" : "closed"}
            className="fa fa-plus"
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