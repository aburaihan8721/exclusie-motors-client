import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../shared/Footer/Footer";
import MenuBar from "../../../shared/MenuBar/MenuBar";
import "./Explore.css";

const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  // console.log(allProducts);

  return (
    <>
      <MenuBar></MenuBar>
      <div id="all-products-area" className="py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center py-3 mt-5">
                <h2 className="fw-bold text-capitalize">
                  <span className="text-info">All</span> of Our products
                </h2>
                <p>
                  Independent and unbiased travel reviews by The Travel Magazine. We test travel products, hotels,
                  tours and activities to help you make an informed decision.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-3">
            {allProducts.map((product) => (
              <div className="col-md-4" key={Math.random()}>
                <div className="border p-3 single-product border border-dark rounded-1">
                  <div className="mb-3">
                    <img className="img-fluid" src={product.image} alt="img" />
                  </div>

                  <h3> Brand : {product.brand}</h3>
                  <h6> Model : {product.model}</h6>
                  <h3>Price : ${product.price}</h3>
                  <p>{product.des}</p>
                  <Link to="purchase">
                    <button className="btn btn-outline-secondary text-capitalize">buy now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
