import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth';

const ReviewForm = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
    axios
      .post("https://vast-escarpment-72434.herokuapp.com/review", data)
      .then((res) => console.log(res))
      .then(alert("Your Review Has Been Added"));
  };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center">Please review Your Exprience</h2>
            {user.email && (
              <input
                {...register("email")}
                defaultValue={user.email}
                required
              />
            )}
            {user.email && (
              <input
                {...register("name")}
                defaultValue={user.displayName}
                required
              />
            )}
            <br />
            <br />
            <textarea {...register("review")} required placeholder="review" />
            <br />
            <input
              type="number"
              {...register("rating")}
              required
              placeholder="Rating"
            />
            <br />
            <input type="submit" value="Review" />
          </form>
        </div>
    );
};

export default ReviewForm;