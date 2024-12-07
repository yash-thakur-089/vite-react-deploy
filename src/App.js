import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AboutManali from "./components/AboutManali";
import Gallery from "./components/Gallery";
import TourPlan from "./components/TourPlan";
import Footer from "./components/Footer";
import Snowfall from "react-snowfall"; // Import react-snowfall

const App = () => {
  const [showSnowfall, setShowSnowfall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const gallerySection = document.getElementById("gallery");

      // Check if the section is in the viewport
      const isHeroVisible = heroSection && isElementVisible(heroSection);
      const isAboutVisible = aboutSection && isElementVisible(aboutSection);
      const isGalleryVisible = gallerySection && isElementVisible(gallerySection);

      // If any of the sections are visible, show snowfall
      if (isHeroVisible || isAboutVisible || isGalleryVisible) {
        setShowSnowfall(true);
      } else {
        setShowSnowfall(false);
      }
    };

    // Helper function to check if an element is in the viewport
    const isElementVisible = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Call it once to check the initial state when the page is loaded
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div>
      {/* Conditionally render snowfall */}
      {showSnowfall && (
        <Snowfall 
          snowflakeCount={200}  // Adjust number of snowflakes as desired
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 10000 }}
        />
      )}

      <Navbar />
      <HeroSection />
      <AboutManali />
      <Gallery />
      <TourPlan />
      <Footer />
    </div>
  );
};

export default App;
