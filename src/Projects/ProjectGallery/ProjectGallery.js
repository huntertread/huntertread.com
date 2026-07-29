import React, { Component } from "react";
import "./projectgallery.css";

class ProjectGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      enlarged: false,
      direction: null
    };

    this.touchStartX = 0;
    this.touchEndX = 0;

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }


  nextImage() {
    this.setState((prevState) => ({
      activeIndex:
        prevState.activeIndex === this.props.images.length - 1
          ? 0
          : prevState.activeIndex + 1,
      direction: "next"
    }));
  }


  previousImage() {
    this.setState((prevState) => ({
      activeIndex:
        prevState.activeIndex === 0
          ? this.props.images.length - 1
          : prevState.activeIndex - 1,
      direction: "previous"
    }));
  }


  toggleImage() {
    this.setState((prevState) => ({
      enlarged: !prevState.enlarged
    }));
  }


  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
  }


  handleTouchMove(event) {
    this.touchEndX = event.touches[0].clientX;
  }


  handleTouchEnd() {
    const swipeDistance =
      this.touchStartX - this.touchEndX;

    if (Math.abs(swipeDistance) < 50) {
      return;
    }

    if (swipeDistance > 0) {
      this.nextImage();
    } else {
      this.previousImage();
    }
  }


  render() {

    const {
      images,
      bullets
    } = this.props;

    const {
      activeIndex,
      enlarged,
      direction
    } = this.state;


    return (
      <div className="project-gallery">

        <div
          className="gallery-image-container"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >

          {images.length > 1 && (
            <button
              className="gallery-arrow left"
              onClick={this.previousImage}
              aria-label="Previous image"
            >
              &#10094;
            </button>
          )}


          <img
            key={activeIndex}
            className={`gallery-image ${direction || ""}`}
            src={images[activeIndex]}
            alt={`Project image ${activeIndex + 1}`}
            onClick={this.toggleImage}
            onAnimationEnd={() =>
              this.setState({ direction: null })
            }
          />


          {images.length > 1 && (
            <button
              className="gallery-arrow right"
              onClick={this.nextImage}
              aria-label="Next image"
            >
              &#10095;
            </button>
          )}

        </div>


        {enlarged && (
          <div
            className="image-overlay"
            onClick={this.toggleImage}
          >
            <img
              src={images[activeIndex]}
              alt={`Expanded project image ${activeIndex + 1}`}
            />
          </div>
        )}


        {images.length > 1 && (
          <div className="gallery-counter">
            {activeIndex + 1} / {images.length}
          </div>
        )}


        {bullets && (
          <ul className="gallery-bullets">
            {bullets.map((bullet, index) => (
              <li key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        )}

      </div>
    );
  }
}

export default ProjectGallery;