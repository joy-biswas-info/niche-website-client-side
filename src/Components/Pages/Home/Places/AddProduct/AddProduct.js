import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm} from "react-hook-form";
import "./AddProduct.css";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
      axios.post('https://ancient-hollows-54145.herokuapp.com/places', data)
          .then(res => {
            alert("Product Added Sucessfully")
            reset()
            
      })
  };

  return (
    <Container className="services varient-light" style={{backgroundImage:"url(./image/slider1.jpg)",backgroundRepeat:"no-repeat",height:"600px"}}>
      <h2 className="text-center text-white ">Add A Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Product name"
            style={{width:"64%",marginBottom:'15px'}}
          />{" "}
          <br />
          <input
            {...register("description")}
          placeholder="Product Description"
          style={{width:"64%",marginBottom:'15px'}}
          />{" "}
          <br />
          <input {...register("img")} placeholder="Image url" style={{width:"64%",marginBottom:'15px'}} /> <br />
          <input type="number" {...register("cost")} placeholder="cost" style={{width:"64%",marginBottom:'15px'}} />{" "}
          <br />
          <input type="submit" />
        </form>
    </Container>
  );
};

export default AddProduct;