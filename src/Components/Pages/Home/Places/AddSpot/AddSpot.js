import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm} from "react-hook-form";
import "./AddSpot.css";
import axios from "axios";

const AddSpot = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
      axios.post('https://ancient-hollows-54145.herokuapp.com/places', data)
          .then(res => {
            alert("added sucessfuly")
            reset()
            
      })
  };

  return (
    <Container className="services bg-primary varient-light">

      <h2 className="text-center text-white ">Add a Service </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="add-spot-form mx-auto">
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="place name"
          />{" "}
          <br />
          <input
            {...register("description")}
            placeholder="Place description"
          />{" "}
          <br />
          <input {...register("img")} placeholder="Image url" /> <br />
          <input type="number" {...register("cost")} placeholder="cost" />{" "}
          <br />
          <input type="submit" />
        </form>
    </Container>
  );
};

export default AddSpot;