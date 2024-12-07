import React from "react";
import Slider from "react-slick";
import './Gallery.css';  // Ensure this is correct


const Gallery = () => {
  const images = [
    "https://www.abhibus.com/blog/wp-content/uploads/2023/04/Kullu-Manali-Trip-in-May-.jpg",
    "https://s7ap1.scene7.com/is/image/incredibleindia/solang-nullah-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730690372",
    "https://www.clubmahindra.com/blog/media/section_images/blog-topic-6530ecb63a76c89.jpg",
    "https://s7ap1.scene7.com/is/image/incredibleindia/hidimba-temple-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730676784",
    "https://content.r9cdn.net/rimg/dimg/50/24/cd2d7a2a-city-45718-17313df4b89.jpg?width=1366&height=768&xhint=2506&yhint=1529&crop=true",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="gallery" style={styles.container}>
      <h2 style={styles.heading}>Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={styles.image}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const styles = {
  container: {
    padding: "4rem 2rem",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#333",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Gallery;
