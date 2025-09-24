import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + Tagline */}
        <div className="footer-logo">
          <h2>🌱 AgriConnect</h2>
          <p>Smart farming starts with the right info.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/crops">Crops</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/tools">Smart Tools</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@agriconnect.com</p>
          <p>Phone: +254 757189764</p>
          <p>Location: Nairobi, Kenya</p>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AgriConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
