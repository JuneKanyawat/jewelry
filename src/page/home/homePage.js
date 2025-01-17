import React from "react";
import NavBar from "../../components/navbar/navbar.js";
import SlideShow from "../../components/slideshow/slideshow.js";
import NewProductSection from "../../components/NewProductSection/NewProductSection.js";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SlideShow />
      <NewProductSection />
    </div>
  );
}

export default HomePage;
