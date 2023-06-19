import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        AKOL JERRY
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#about">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/jerry-rawlings-907513201/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a href="https://www.facebook.com/jerry.rawlings.334" target="_blank">
          {" "}
          <BsFacebook />
        </a>
        <a href="https://twitter.com/MajorRawlings" target="_blank">
          {" "}
          <BsTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Akol Jerry. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
