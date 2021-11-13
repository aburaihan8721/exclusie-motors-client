import React from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/cars", data)
    .then((res) => {
      if (res.data.insertedId) {
        <div className="alert alert-success" role="alert">
          Car Added Successfully!
        </div>;
        reset();
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col-md-6">
            <div className="border border-dark p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center py-3 fw-bold">
                  Add <span className="text-info">Car</span>
                </h2>
                <input
                  className="form-control mb-3"
                  {...register("brand", { required: true })}
                  placeholder="Name of brand"
                />
                <input className="form-control mb-3" {...register("model")} placeholder="Model no " />
                <input className="form-control mb-3" {...register("des")} placeholder="Description" />
                <input className="form-control mb-3" {...register("price")} placeholder="Price" />
                <input className="form-control mb-3" {...register("image")} placeholder="Image Url" />
                <button className="form-control mb-3 btn btn-outline-info text-uppercase fw-bold" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
