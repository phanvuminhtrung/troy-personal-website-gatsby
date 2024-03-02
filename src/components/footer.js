import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer = () => (
  <footer className="bg-dark p-1 text-center">
    <a
      className="text-white text-decoration-none text-uppercase small"
      href="https://www.gatsbyjs.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      built by Troy Phan based on Gatsby
    </a>
  </footer>
);

export default Footer;