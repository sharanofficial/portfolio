import React from "react";
import "./footer.css";
const Footer = () => {
  let year = new Date().getFullYear().toString();
  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <p>&copy; sharan {year}</p>
    </footer>
  );
};

export default Footer;
