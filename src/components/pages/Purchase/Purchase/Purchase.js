import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";

const Purchase = () => {
  const [car, setCar] = useState();
  const { id } = useParams();
  const { user } = useAuth();
  // console.log(car);

  // data load
  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  // handle address data
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: `${user?.email}`,
      name: `${user?.displayName}`,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // post address info to server
    axios.post("http://localhost:5000/address", data).then((res) => {
      console.log(res);
      if (res.data.acknowledged) {
        <div className="alert alert-success" role="alert">
          Address Added Successfully!
        </div>;
        reset();
      }
    });
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center py-3 fw-bold">
                  Your <span className="text-info">Address</span>
                </h2>

                <input className="form-control mb-3" {...register("name")} placeholder="Name" disabled />
                <input className="form-control mb-3" {...register("email")} placeholder="Email" disabled />
                <input
                  className="form-control mb-3"
                  {...register("mobile", { required: true })}
                  placeholder="Mobile"
                />

                <textarea
                  className="form-control mb-3"
                  {...register("fullAddress", { required: true })}
                  placeholder="Full Address"
                />
                <button className="form-control mb-3 btn btn-outline-info text-uppercase fw-bold" type="submit">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
