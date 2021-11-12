import {
  getAuth,
  signInWithEmailAndPassword
} from "@firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
    const auth = getAuth();
  const [loginData, setLoginData] = useState();
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

    const handelLoginSubmit = (e) => {
        e.preventDefault();
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <div>
      <form onSubmit={handelLoginSubmit}>
        <h3 className="text-warning fs-2 fw-bold">Please Register</h3>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              name="email"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              onBlur={handleChange}
              className="form-control"
              id="inputPassword3"
              name="password"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-warning my-1">
          Log In
        </button>
      </form>
      <NavLink to="/register">New User ? Please Log In</NavLink>
    </div>
  );
};

export default LoginForm;
