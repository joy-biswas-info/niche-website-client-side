import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner-image"
          src="./image/banner/banner1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cox's Bazar Sea betch</h3>
          <p>Book a Hotel room on Sea view Room .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner-image"
          src="./image/banner/banner2.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Shylihet </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-image"
          src="./image/banner/banner3.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Kolkata</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
// render(<ControlledCarousel />);

export default Banner;
