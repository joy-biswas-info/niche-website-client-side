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
        <Col className="mx-auto my-2 rounded shadow-sm col-lg-4 col-md-12 py-2">
            <img src={img} alt="spot" style={{width:'350px',margin:"0 auto"}} />
            <h2>{name.slice(0,20)}</h2>
            <p>{description.slice(0,100)}</p>
            <h2>$ {cost}</h2>
            <Button variant="warning" onClick={()=>{handelBooking(_id)}} >Buy Now</Button>
        </Col>
    );
};
export default Place;