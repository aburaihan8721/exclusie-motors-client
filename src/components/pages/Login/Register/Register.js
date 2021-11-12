import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const history = useHistory();
  const location = useLocation();

  // handle on change
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterForm = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Password did not match");
      return;
    }

    registerUser(registerData.email, registerData.password, location, history);
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
                  {/* <div>
                <input
                  className="form-control mb-4 text-capitalize"
                  type="text"
                  placeholder="type your full name"
                  onChange={handleOnChange}
                  name="name"
                />
              </div> */}
                  <div>
                    <input
                      className="form-control mb-4"
                      type="email"
                      placeholder="Type Your Email"
                      onChange={handleOnChange}
                      name="email"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control mb-4"
                      type="password"
                      placeholder="Type Your Password"
                      onChange={handleOnChange}
                      name="password"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control mb-4"
                      type="password"
                      placeholder="Re-Type Your Password"
                      onChange={handleOnChange}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
