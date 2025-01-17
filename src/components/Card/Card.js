import React from "react";
import "./Card.css";

function Card({ color, name }) {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundColor: color }}></div>
      <p className="card-name">{name}</p>
    </div>
  );
}

export default Card;
