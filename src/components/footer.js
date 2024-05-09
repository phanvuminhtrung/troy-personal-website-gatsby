import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer = () => (
  <footer className="bg-dark p-2 text-center d-flex justify-content-center align-items-center">
    <a
      className="text-white text-decoration-none text-uppercase small"
      href="/about"
      style={{ fontSize: '0.7rem' }} 
      rel="noopener noreferrer"
    >
      COPYWRITE @ 2024 TROY PHAN
    </a> 
    <span className="text-white mx-3">|</span>
    <a href='https://buymeacoffee.com/thisistroyza' target='_blank' rel='noreferrer'>
      <img
        src='https://cdn.buymeacoffee.com/buttons/v2/default-blue.png'
        alt='Buy Me A Coffee'
        style={{ height: '40px', width: '150px' }}
      />
    </a>
  </footer>
);

export default Footer;