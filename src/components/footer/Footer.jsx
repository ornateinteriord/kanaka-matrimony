<<<<<<< HEAD

import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
=======
import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
>>>>>>> 86e228c (New design)
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
<<<<<<< HEAD
            <h2 className="footer-heading">Kanaka Matrimony</h2>
=======
            <h2 className="footer-heading">Sangam Sathi</h2>
>>>>>>> 86e228c (New design)
            <p className="footer-text">
              A Superior Matrimony Service. Register and find your special
              someone matches within your community.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">About Company</h3>
            <ul className="footer-list">
<<<<<<< HEAD
              <li>About Us</li>
              <li>Promoter</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cancellation Policy</li>
=======
              <li onClick={() => navigate("/")}>Home</li>
               <li onClick={() => navigate("/service")}>Service</li>
              <li onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => navigate("/privacy-policy")}>Privacy Policy</li>
               <li onClick={() => navigate("/contact")}>Contact Us</li>
>>>>>>> 86e228c (New design)
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
<<<<<<< HEAD
            <p className="footer-text">Email: contactuskanakamatrimony@gmail.com</p>
            <p className="footer-text">Email: enquirykanakamatrimony@gmail.com</p>
=======
            <p className="footer-text">Email: ornateinteriord@gmail.com</p>
            <p className="footer-text">Email: ornateinteriord@gmail.com</p>
>>>>>>> 86e228c (New design)
            <p className="footer-text">Call Us: 9148824442</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Subscribe to Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="footer-input"
            />
            <button className="footer-button">Subscribe</button>
          </div>
        </div>

<<<<<<< HEAD
        <div className="footer-social">
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
              <FaYoutube />
            </a>
          </div>
=======
           <div className="social-icons">
          <span className="social-icon facebook" onClick={() => handleSocialClick("facebook")}>
            <FaFacebookF />
          </span>
          <span className="social-icon twitter" onClick={() => handleSocialClick("twitter")}>
            <FaTwitter />
          </span>
          <span className="social-icon linkedin" onClick={() => handleSocialClick("linkedin")}>
            <FaLinkedinIn />
          </span>
          <span className="social-icon youtube" onClick={() => handleSocialClick("youtube")}>
            <FaYoutube />
          </span>
>>>>>>> 86e228c (New design)
        </div>
        
        <div className="footer-copyright">
          Copyright © {new Date().getFullYear()} Ornate Pvt Ltd.
        </div>
      </div>
    </footer>
  );
}

export default Footer;