import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-box">
              <div className="text-center">
                <h1 className="text-white text-uppercase">drive into a exclusive world </h1>
                <h5 className="text-white text-capitalize">fulfill your desired with exclusive motors</h5>
                <Link to="/explore">
                  <button className="btn btn-outline-info mt-3 text-capitalize">explore more cars</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
