import React, { Component } from "react";
import "./projectgallery.css";

class ProjectGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      enlarged: false
    };
  }

  next = () => {
    this.setState({
      current:
        (this.state.current + 1) %
        this.props.images.length
    });
  };

  previous = () => {
    this.setState({
      current:
        (this.state.current - 1 + this.props.images.length) %
        this.props.images.length
    });
  };

  selectImage = (index) => {
    this.setState({
      current: index
    });
  };

  toggleEnlarge = () => {
    this.setState({
      enlarged: !this.state.enlarged
    });
  };

  render() {
    const image =
      this.props.images[this.state.current];

    return (
      <>
        <div className="gallery">

          <div className="gallery-main">

            <button
              className="gallery-arrow"
              onClick={this.previous}
            >
              ◀
            </button>

            <img
              src={image}
              alt=""
              onClick={this.toggleEnlarge}
            />

            <button
              className="gallery-arrow"
              onClick={this.next}
            >
              ▶
            </button>

          </div>

          <div className="gallery-thumbnails">

            {this.props.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={
                  index === this.state.current
                    ? "active"
                    : ""
                }
                onClick={() =>
                  this.selectImage(index)
                }
              />
            ))}

          </div>

          <ul className="gallery-bullets">
            {this.props.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          {this.state.enlarged && (
            <div
              className="gallery-modal"
              onClick={this.toggleEnlarge}
            >
              <img src={image} alt="" />
            </div>
          )}

        </div>
      </>
    );
  }
}

export default ProjectGallery;