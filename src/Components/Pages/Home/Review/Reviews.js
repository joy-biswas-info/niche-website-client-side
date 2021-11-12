import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('https://vast-escarpment-72434.herokuapp.com/review')
            .then(res => res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <Carousel  style={{height:'200px'}}>
            {
                reviews.map(review=><SingleReview review={review} key={review._id}></SingleReview>)
            }
            </Carousel>
    );
};

export default Reviews;