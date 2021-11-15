import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const limitProducts = products?.slice(0, 6);
  // console.log(limitProducts[0]);

  useEffect(() => {
    fetch(`https://still-dawn-32083.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   console.log(products);

  return (
    <div id="products-area" className="p-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center py-3">
              <h2 className="text-capitalize fw-bold">
                Our <span className="text-info">exclusive cars</span>
              </h2>
              <p>
                Independent and unbiased travel reviews by The Travel Magazine. We ensure best quality and
                activities to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {limitProducts?.map((product) => (
            <div className="col-md-4" key={Math.random()}>
              <div className="border p-3 single-product border border-dark rounded-1">
                <div className="mb-3">
                  <img className="img-fluid" src={product.image} alt="img" />
                </div>

                <h3> Brand : {product.brand}</h3>
                <h6> Model : {product.model}</h6>
                <h3>Price : ${product.price}</h3>
                <p>{product.des}</p>
                <NavLink to={`/purchase/${product._id}`}>
                  <button className="btn btn-outline-secondary text-capitalize">buy now</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
