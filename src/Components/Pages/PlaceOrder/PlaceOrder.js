import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container,Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/UseAuth";

const PlaceOrder = () => {
  const { placeId } = useParams();
  const [place, setPlace] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://ancient-hollows-54145.herokuapp.com/placeorder/${placeId}`)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post('https://ancient-hollows-54145.herokuapp.com/order',data)
    .then(res=>console.log(res))
  };
  return (
    <Container>
          <Row>
          <Col xs={6}>
        <h2>{place.name} </h2>
        <img src={place.img} alt="place" className="img-fluid"/>
      </Col>
      <Col xs={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center">Please Place your order</h2>
          {user.email && (
            <input {...register("email")} defaultValue={user.email} required />
          )} <br />
          {place.name && (
            <input {...register("name")} defaultValue={place.name} required /> 
          )}
          <br />
          <input {...register("address")} required placeholder="Address"/>
            <br />
          <input type="number" {...register("quantity")} required placeholder="Quantity"/>
            <br />
          <input {...register("phoneNumber")} required placeholder="Phone Number"/>
          <br />
          <input type="submit" />
        </form>
      </Col>
    </Row>
    </Container>
  );
};

export default PlaceOrder;
