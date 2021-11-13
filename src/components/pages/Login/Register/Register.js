import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./Register.css";
import googleImg from "../../../../images/google1.png";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();

  const history = useHistory();
  const location = useLocation();

  // handle on change
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  const handleRegisterForm = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Password did not match");
      return;
    }

    registerUser(registerData.email, registerData.password, registerData.name, location, history);
    e.preventDefault();
  };

  return (
    <div className="section-margin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="border border-info p-3">
              <h2 className="text-secondary text-center pb-2 fw-bold">Register</h2>

              {!isLoading && (
                <form onSubmit={handleRegisterForm}>
                  <div>
                    <input
                      className="form-control mb-4"
                      type="text"
                      placeholder="Type Your Full Name"
                      onBlur={handleOnBlur}
                      name="name"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="email"
                      placeholder="Type Your Email"
                      onBlur={handleOnBlur}
                      name="email"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="password"
                      placeholder="Type Your Password"
                      onBlur={handleOnBlur}
                      name="password"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="password"
                      placeholder="Re-Type Your Password"
                      onBlur={handleOnBlur}
                      name="password2"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4 bg-secondary text-uppercase"
                      type="submit"
                      value="submit"
                    />
                  </div>
                </form>
              )}

              {/* show spinner */}
              {isLoading && (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-center mt-3">
                        <div className="spinner-border text-danger" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {user?.email && (
                <div className="alert alert-success" role="alert">
                  User Created Successfully
                </div>
              )}

              {authError && (
                <div className="alert alert-danger" role="alert">
                  {authError}
                </div>
              )}

              <p className="text-center text-capitalize">
                already have an account? please <NavLink to="/login">login</NavLink>
              </p>

              <p className="text-center fw-bold">
                ------------------------ <span className="text-info">OR</span> ------------------------
              </p>
              <div className="text-center">
                <span>
                  <button onClick={handleGoogleSignIn} className="btn btn-outline-info text-capitalize fw-bold">
                    <span className="px-1">
                      <img src={googleImg} alt="google" style={{ height: "25px", width: "25px" }} />
                    </span>
                    <span className="px-1">continue with google</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
