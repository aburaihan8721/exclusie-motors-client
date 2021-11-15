import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Purchase = () => {
  const [car, setCar] = useState({});

  const { id } = useParams();
  const { user, success, setSuccess } = useAuth();
  const initialInfo = {
    image: car.image,
    brand: car.brand,
    model: car.model,
    name: user.displayName,
    email: user.email,
    mobile: "",
    address: "",
  };
  const [bookingData, setBookingData] = useState(initialInfo);

  // handle on blur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingData = { ...bookingData };
    newBookingData[field] = value;
    setBookingData(newBookingData);
  };

  const handleBookingForm = (e) => {
    e.preventDefault();

    const booking = {
      ...bookingData,
      image: car.image,
      brand: car.brand,
      model: car.model,
      name: user.displayName,
      email: user.email,
    };

    console.log(booking);
    // post booking info to server
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
        }
      });
  };

  // data load
  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  return (
    <div className="py-4">
      <div className="container">
        {/* section heading */}
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="text-center py-3">
              <h2 className="fw-bold">
                <span className="text-info"> Placed</span> Your Order
              </h2>
              <p>
                Independent and unbiased reviews by The Travel Magazine. We ensure best quality and activities.
              </p>
            </div>
          </div>
        </div>

        {/* single car data */}
        <div className="row justify-content-center vh-75 align-items-center">
          <div className="col-md-5">
            <div className="border border-success p-3">
              <div>
                <img className="img-fluid" src={car?.image} alt="car" />
              </div>
              <h3>Brand : {car?.brand}</h3>
              <h6>Model : {car?.model}</h6>
              <h5>Price : ${car?.price} </h5>
              <p>{car?.des}</p>
            </div>
          </div>

          {/* address info */}
          <div className="col-md-5">
            <div className="w-75 mx-auto p-3">
              <form onSubmit={handleBookingForm}>
                <h2 className="text-center py-3 fw-bold">
                  Your <span className="text-info">Address</span>
                </h2>

                <div>
                  <input
                    className="form-control mb-4"
                    type="text"
                    name="image"
                    defaultValue={car.image}
                    disabled
                  />
                </div>

                <div>
                  <input
                    className="form-control mb-4"
                    type="text"
                    name="brand"
                    defaultValue={car.brand}
                    disabled

                  />
                </div>

                <div>
                  <input
                    className="form-control mb-4"
                    type="text"
                    name="model"
                    defaultValue={car.model}
                    disabled

                  />
                </div>

                <div>
                  <input
                    className="form-control mb-4"
                    type="text"
                    onBlur={handleOnBlur}
                    name="name"
                    defaultValue={user.displayName}
                  />
                </div>

                <div>
                  <input
                    className="form-control mb-4"
                    type="email"
                    onBlur={handleOnBlur}
                    name="email"
                    defaultValue={user.email}
                  />
                </div>

                <div>
                  <input
                    className="form-control mb-4"
                    type="number"
                    placeholder="Mobile"
                    onBlur={handleOnBlur}
                    name="mobile"
                  />
                </div>
                
                <div>
                  <textarea
                    className="form-control mb-4"
                    type="text"
                    placeholder="Your Full Address"
                    onBlur={handleOnBlur}
                    name="address"
                  />
                </div>

                <div>
                  <input
                    className="form-control mb-4 bg-secondary text-uppercase fw-bold"
                    type="submit"
                    value="Place Order"
                  />
                </div>

                {success && (
                  <div className="alert alert-success" role="alert">
                    Order Successful!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
