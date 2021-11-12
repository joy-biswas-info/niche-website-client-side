import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Admin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/user/admin', {
            method: "PUT",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount === 1) {
            alert('Admin Has Been Added')
            } else {
              alert("Not An User Or Already Added")
          }
        })
        
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" value="Make Admin" />
    </form>
  );
};

export default Admin;
