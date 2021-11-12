import React from "react";
import {NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./MenuBar.css";

const MenuBar = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <div className="section-margin" id="menu-area">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand text-white fs-2 fw-bold" to="/">
            Exclusive Motors
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore">
                  More Cars
                </NavLink>
              </li>

              {user?.email ? (
                <li className="mx-1">
                  <button onClick={logout} className="btn btn-outline-info text-capitalize">
                    logout
                  </button>
                </li>
              ) : (
                <li className="mx-1">
                  <NavLink className="" to="/login">
                    <button className="btn btn-outline-info text-capitalize">login</button>
                  </NavLink>
                </li>
              )}
            </ul>
            <span className="navbar-text text-white me-1">user name</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
