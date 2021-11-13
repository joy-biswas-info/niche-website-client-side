import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://vast-escarpment-72434.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <Container style={{backgroundColor:'#d1e7dd'}} className="p-3">
      <h2 className="fs-1 fw-bold text-center">
        <span style={{ color: "red" }}>What Our</span> Clint Says
      </h2>
      <Carousel style={{ width: "600px",height:'300px', margin: "50px auto",display:'flex'  }}>
        {reviews.map((review) => (
          <Carousel.Item revirw={review} key={review._key} style={{ width: "600px",height:'300px', margin: "0px auto"}}>
            <div style={{width:'300px',height:'300px',margin:'0 auto',backgroundColor:'white',padding:'20px'}}>
            <h2>{review.name}</h2>
            <h2>{review?.review}</h2>
            {review.rating === "1" && (
              <>
                {" "}
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </>
            )}
            {review.rating === "2" && (
              <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </>
            )}
            {review.rating === "3" && (
              <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </>
            )}
            {review.rating === "4" && (
              <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </>
            )}
            {review.rating === "5" && (
              <>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </>
            )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Reviews;
