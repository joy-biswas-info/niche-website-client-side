import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory} from 'react-router-dom';

const Place = (props) => {
    const { name, _id, description, img, cost } = props.place;
    const history = useHistory();
    const handelBooking = (_id) => {
        const uri = `placeorder/${_id}`;
        history.push(uri);
    }
    
    return (
        <Col className="m-2 p-4 spot rounded shadow-sm">
            <img src={img} alt="spot" className="img-fluid" />
            <h2>{name}</h2>
            <p>{description.slice(0,100)}</p>
            <h2>{cost}</h2>
            <Button variant="danger" onClick={()=>{handelBooking(_id)}} >Book Now </Button>
        </Col>
    );
};
export default Place;