import React from "react";
import "./NewProductSection.css";
import Card from "../Card/Card";

function NewProductSection() {
  const products = [
    { color: "#ffcccb", name: "Product 1" },
    { color: "#add8e6", name: "Product 2" },
    { color: "#90ee90", name: "Product 3" },
    { color: "#ffb6c1", name: "Product 4" },
  ];

  return (
    <div className="newproduct-section">
      <div className="container center-text">
        <h2 className="sub-heading">NEW PRODUCTS</h2>
        <ul className="link-list">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>

      <div className="container card-box">
        {products.map((product, index) => (
          <Card key={index} color={product.color} name={product.name} />
        ))}
      </div>
    </div>
  );
}

export default NewProductSection;
