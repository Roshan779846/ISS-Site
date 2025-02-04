// src/components/Footer.js
import React from "react";
import "./Footer.css";
// Update with your logo path
// import instagram from "./instagram.png";
// import youtube from "./youtube.png";
// import xIcon from "./x.png";
// import tiktok from "./tiktok.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        {/* <img src="/logo.png" alt="ISS Club Logo" className="logo" /> */}
        <span className="logo-text">ISS Club</span>
      </div>

      <div className="column">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </div>

      <div className="column">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
        </ul>
      </div>

      <div className="column">
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
          <li>
            <a href="/cookies">Cookie Policy</a>
          </li>
        </ul>
      </div>

      <div className="social-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={instagram} alt="Instagram" /> */}
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          {/* <img src={youtube} alt="YouTube" /> */}
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          {/* <img src={xIcon} alt="X" /> */}
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          {/* <img src={tiktok} alt="TikTok" /> */}
        </a>
      </div>

      <div className="footer-links">
        <a href="/privacy">Privacy & Policy</a> |
        <a href="/terms">Terms & Conditions</a>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} International Students Society. All
        rights reserved.
      </div>
    </footer>
  );
}
