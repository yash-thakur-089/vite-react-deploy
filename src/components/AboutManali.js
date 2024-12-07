import React from "react";
import "./AboutManali.css";  // Import the CSS file

const AboutManali = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-heading">About Manali</h2>
      <p className="about-description">
        Nestled in the heart of Himachal Pradesh, Manali is a charming hill station known for its picturesque landscapes, snow-capped mountains, and lush greenery. It's a perfect destination for nature lovers, adventure enthusiasts, and those seeking peace.
      </p>
      <div className="about-features">
        <div className="about-featureCard">
          <h3>Natural Beauty</h3>
          <p>Explore the scenic valleys, waterfalls, and pristine rivers.</p>
        </div>
        <div className="about-featureCard">
          <h3>Adventure Activities</h3>
          <p>Enjoy trekking, paragliding, and skiing during your stay.</p>
        </div>
        <div className="about-featureCard">
          <h3>Cultural Heritage</h3>
          <p>Visit ancient temples, monasteries, and local markets.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutManali;
