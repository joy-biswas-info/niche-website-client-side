import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Place from './place/Place';
import "./Places.css"

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://ancient-hollows-54145.herokuapp.com/places')
            .then(res => res.json())
            .then(data=>setPlaces(data))
    },[])
    return (
        <Container id="spot" className="my-4">
            <h2 className="text-center fw-bold text-3xl my-4">Book Your Spot Now</h2>
            <Row>
            {
                places.map(place=><Place place={place} key={place._id}></Place>)
            }
            </Row>
        </Container>
    );
};

export default Places;