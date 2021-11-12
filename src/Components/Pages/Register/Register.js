import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import react, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink,useHistory,useLocation } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const Register = () => {
  const auth = getAuth();
  const [registerData, setRegisterData] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
  const location = useLocation();
  const url = location.state?.form.pathname || "/dashboard";
  const { user } = useAuth();

    const handleChange = (e) => {
    const auth = getAuth();
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
      setRegisterData(newRegisterData);
      console.log(registerData);
  };

    const handelRegistation = (e) => {
        createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
        .then((userCredential) => {
          // Signed in 
            const user = userCredential.user;
            setUserName()
            saveUser(registerData.email,registerData.name);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    e.preventDefault();
  };

  const setUserName=()=>{
    updateProfile(auth.currentUser,{displayName : registerData.name})
    .then(result=>{ })
}
    const saveUser = (email, displayName) => {
        const user = { displayName,email }
        fetch('https://vast-escarpment-72434.herokuapp.com/user', {
          method: "PUT",
          headers: {
            'content-type':"application/json"
          },
          body:JSON.stringify(user)
        })
        .then()
      }
    return (
        <Container>
        {user.email ? (
          history.push(url)
        ) : (
            <div className="login-form d-flex">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form onSubmit={handelRegistation}>
                <h3 className="text-warning fs-2 fw-bold">Please Register</h3>
      
                <div className="row mb-3">
                  <label htmlFor="inputName" className="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      onBlur={handleChange}
                      className="form-control"
                      id="inputName"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
      
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
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-warning my-1">
                  Register
                </button>
              </form>
              <NavLink to="/login">Already register? Please Log In</NavLink>
            </div>
            <div className="col-md-3"></div>
          </div>
        )}
      </Container>
    
  );
};

export default Register;
