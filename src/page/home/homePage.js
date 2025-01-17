import React from "react";
import NavBar from "../../components/navbar/navbar.js";
import SlideShow from "../../components/slideshow/slideshow.js";
import NewProduct from "../../components/NewProduct/NewProduct.js";
import MoreProduct from "../../components/MoreProduct/MoreProduct.js";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SlideShow />
      <NewProduct />
      <MoreProduct />
    </div>
  );
}

export default HomePage;
