import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/UseAuth";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://vast-escarpment-72434.herokuapp.com/placeorder/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://vast-escarpment-72434.herokuapp.com/order", data)
      .then((res) => console.log(res))
      .then(alert("Your Order Has Been Received"));
  };
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h2>{product?.name} </h2>
          <img src={product?.img} alt="product" style={{maxWidth:'60%'}} />
        </Col>
        <Col xs={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center">Please product your order</h2>
            {user.email && (
              <input
                {...register("email")}
                defaultValue={user.email} style={{width:'64%'}}
                required
              />
            )}{" "}
            <br/> <br/>
            {product?.name && (
              <input
                {...register("name")}
                defaultValue={product.name} style={{width:'64%'}}
                required
              />
            )}
            <br/> <br/>
            <input {...register("address")} required placeholder="Address" style={{width:'64%'}} />
            <br/> <br/>
            <input
              type="number"
              {...register("quantity")}
              required
              placeholder="Quantity" style={{width:'64%'}}
            />
            <br/> <br/>
            <input
              {...register("phoneNumber")}
              required
              placeholder="Phone Number" style={{width:'64%'}}
            />
            <br/> <br/>
            <input type="submit" value="place Order" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
