import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Manali</div>
      <ul className="nav-links">
        <li><a href="#home" className="navbar-link">Home</a></li>
        <li><a href="#about" className="navbar-link">About</a></li>
        <li><a href="#tour-plan" className="navbar-link">Tour Plan</a></li>
        <li><a href="#gallery" className="navbar-link">Gallery</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
