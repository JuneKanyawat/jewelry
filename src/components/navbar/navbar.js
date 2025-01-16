import React, { useState } from "react";
import "./navbar.css";

function NavBar() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <nav className="navbar">
      <h1 className="nav-title">JEWELRY PARTS</h1>
      <div className="navbar-left">
        <div className="search-container">
          <input
            id="inputBox"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search"
            className="search-input"
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        <button className="nav-btn">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button className="nav-btn">
          <i class="fa-regular fa-user"></i>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
