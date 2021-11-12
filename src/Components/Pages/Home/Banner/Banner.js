import React from "react";
import Button from 'react-bootstrap/Button';
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel style={{margin:"-100px 0 0 0 "}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner-image"
          src="./image/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="bg-warning p-2 text-black fs-2 fw-bold">Cox's Bazar Sea betch</h3>
          <p>Book a Hotel room on Sea view Room .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner-image"
          src="./image/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="bg-warning p-2 text-black fs-2 fw-bold">Shylihet </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-image"
          src="./image/slider1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="mb-4">
          <h3 className="bg-warning p-2 text-black fs-2 fw-bold">Success is where preparation and opportunity meet</h3>
          <p>
          It's time to dress up right. It's time to raise the curtain on the Muppet Show to night. Here's the story of a lovely lady who was three very lovely.  
          </p>
        <Button className="bg-warning px-2 text-black fs-3 fw-bold">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
// render(<ControlledCarousel />);

export default Banner;
