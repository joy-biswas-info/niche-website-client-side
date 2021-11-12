import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  // const [seveUser, setSaveUser] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (isLogin) {
      processLogIn(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  const processLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
      });
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError();
        setUserName();
        saveUser(email,name);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const saveUser = (email, displayName) => {
    const user = { displayName,email }
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        'content-type':"application/json"
      },
      body:JSON.stringify(user)
    })
    .then()
  }

  return (
    <div className="login-form d-flex">
      <div className="col-md-3"></div>
      <div className="col-md-6"><form onSubmit={handleRegistration}>
          <h3 className="text-warning fs-2 fw-bold">
            Please {isLogin ? "Login" : "Register"}
          </h3>
          {!isLogin && (
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onBlur={handleNameChange}
                  className="form-control"
                  id="inputName"
                  placeholder="Your Name"
                />
              </div>
            </div>
          )}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
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
                onBlur={handlePasswordChange}
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  onChange={toggleLogin}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered?
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 text-danger">{error}</div>
          <button type="submit" className="btn btn-warning my-1">
            {isLogin ? "Login" : "Register"}
          </button>
        </form></div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default Register;
