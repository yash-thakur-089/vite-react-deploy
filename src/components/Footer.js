import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Manali Tour | Developed by Yash</p>
      <div style={styles.socialLinks}>
        <a href="https://facebook.com" style={styles.link}>Facebook</a>
        <a href="https://www.instagram.com/your_fella_yash/" style={styles.link}>Instagram</a>
        <a href="https://x.com/Yash_Thakur_089" style={styles.link}>Twitter</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "2rem 0",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: "1rem",
  },
  socialLinks: {
    marginTop: "1rem",
  },
  link: {
    margin: "0 1rem",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Footer;
