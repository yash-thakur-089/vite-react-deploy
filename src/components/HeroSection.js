import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Explore Manali: Your Dream Destination</h1>
        <p className="hero-description">
          A journey through the beautiful hills and valleys of Manali, offering breathtaking views, adventure activities, and serene landscapes.
        </p>
        <button className="hero-btn">Plan Your Trip</button>
      </div>
    </div>
  );
};

export default HeroSection;
