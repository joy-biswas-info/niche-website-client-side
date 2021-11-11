import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container,Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/UseAuth";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/placeorder/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/order',data)
    .then(res=>console.log(res))
  };
  return (
    <Container>
          <Row>
          <Col xs={6}>
        <h2>{product?.name} </h2>
        <img src={product?.img} alt="product" className="img-fluid"/>
      </Col>
      <Col xs={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center">Please product your order</h2>
          {user.email && (
            <input {...register("email")} defaultValue={user.email} required />
          )} <br />
          {product?.name && (
            <input {...register("name")} defaultValue={product.name} required /> 
          )}
          <br />
          <input {...register("address")} required placeholder="Address"/>
            <br />
          <input type="number" {...register("quantity")} required placeholder="Quantity"/>
            <br />
          <input {...register("phoneNumber")} required placeholder="Phone Number"/>
          <br />
          <input type="submit" value="place Order" />
        </form>
      </Col>
    </Row>
    </Container>
  );
};

export default PlaceOrder;
