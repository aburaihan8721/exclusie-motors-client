import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className=" p-5" id="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 border-end custom-b">
            <div className="p-3 text-center">
              <h4 className="text-white ms-2">
                {" "}
                <span className="text-info">Exclusive</span> Motors
              </h4>
              <ul className="me-4">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/explore">More Cars</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 border-end custom-b">
            <div className="p-3 text-center">
              <h4 className="text-white ms-2">Hot Line</h4>
              <ul className="me-4">
                <li>
                  <Link to="/">0202020202</Link>
                </li>
                <li>
                  <Link to="/">0303030303</Link>
                </li>
                <li>
                  <Link to="/">0404040404</Link>
                </li>
                <li>
                  <Link to="/">0505050505</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 text-center">
              <h4 className="text-white">Follow Us</h4>
              <div>
                <Link to="/" className="d-block custom-icon-border link-din">
                  <FontAwesomeIcon icon={faLinkedinIn} className="faIcon " />
                </Link>
                <Link to="/" className="d-block custom-icon-border facebook">
                  <FontAwesomeIcon icon={faFacebookF} className="faIcon " />
                </Link>
                <Link to="/" className="d-block custom-icon-border twitter">
                  <FontAwesomeIcon icon={faTwitter} className="faIcon " />
                </Link>
                <Link to="/" className="d-block custom-icon-border instagram">
                  <FontAwesomeIcon icon={faInstagram} className="faIcon " />
                </Link>
              </div>
            </div>
          </div>

          <hr className="text-white mt-4 border" />

          <div className="col-md-12">
            <p className="text-center text-white mt-4">
              &copy; All Right Reserved By<span className="text-info fw-bold"> Exclusive Motors</span> Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
