import React from "react";
import Footer from "../../../shared/Footer/Footer";
import MenuBar from "../../../shared/MenuBar/MenuBar";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
