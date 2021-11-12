import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-area" className="py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center py-3">
              <h2 className="fw-bold">
                <span className="text-info">Contact</span> Us
              </h2>
              <p>
                Independent and unbiased travel reviews by The Travel Magazine. We test travel products, hotels,
                tours and activities to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="map-b">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.91172955949!2d89.3001655507666!3d24.841520864198234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1636630653847!5m2!1sen!2sbd"
                width="600"
                title="myFrame"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-b">
              <form>
                <h3 className="text-center text-capitalize py-3 fw-bold">contact form</h3>
                <input
                  class="form-control mb-3 text-capitalize"
                  type="text"
                  name=""
                  id=""
                  placeholder="your name"
                />
                <input
                  class="form-control mb-3 text-capitalize"
                  type="email"
                  name=""
                  id=""
                  placeholder="your email"
                />
                <input
                  class="form-control mb-3 text-capitalize"
                  type="number"
                  name=""
                  id=""
                  placeholder="your phone no"
                />
                <textarea
                  class="form-control mb-3 text-capitalize"
                  name=""
                  id=""
                  placeholder="Leave a comment here"
                ></textarea>
                <input
                  class="form-control mb-3 text-capitalize bg-dark fw-bold text-white"
                  type="submit"
                  value="send message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
