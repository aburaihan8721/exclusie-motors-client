import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import googleImg from "../../../../images/google1.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const history = useHistory();
  const location = useLocation();

  // onblur for handling input value
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  const handleLoginForm = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <div className="section-margin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="border border-info p-3">
              <h2 className="text-secondary text-center pb-2 fw-bold">Login</h2>

              {!isLoading && (
                <form onSubmit={handleLoginForm}>
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
                      placeholder="Type Your password"
                      onBlur={handleOnBlur}
                      name="password"
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

              {/* {user?.email && (
                <div className="alert alert-success" role="alert">
                  logged in Successfully
                </div>
              )} */}

              {authError && (
                <div className="alert alert-danger" role="alert">
                  {authError}
                </div>
              )}

              <p className="text-capitalize text-center">
                are you new user? please <NavLink to="/register">register</NavLink>
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

export default Login;
