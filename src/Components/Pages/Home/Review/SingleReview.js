import React from "react";
import { Carousel } from "react-bootstrap";

const SingleReview = (props) => {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=eee"
        alt="Review slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default SingleReview;
