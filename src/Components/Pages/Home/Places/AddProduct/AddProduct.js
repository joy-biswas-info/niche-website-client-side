import React from "react";
import {Container} from "react-bootstrap";
import { useForm} from "react-hook-form";
import "./AddProduct.css";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
      axios.post('https://vast-escarpment-72434.herokuapp.com/addproduct', data)
          .then(res => {
            alert("Product Added Sucessfully")
            reset()
            
      })
  };

  return (
    <Container className="services varient-light addproduct">
      <h2 className="text-center">Add A Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
          <input
            {...register("name", { required: true})}
            placeholder="Product name"
            style={{width:"64%",marginBottom:'15px'}}
          />{" "}
          <br />
          <textarea
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