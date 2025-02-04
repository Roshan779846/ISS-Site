// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="ISS Club Logo" className="logo-img" />
        <span className="logo-text">ISS Club</span>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      <div className={`navbar-content ${isOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setIsOpen(false)}>
              EVENTS
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/games" onClick={() => setIsOpen(false)}>
              GAMES
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <i className="fas fa-search"></i>
          <span className="language-selector">EN</span>
          <button className="apply-button">APPLY NOW</button>
        </div>
      </div>
    </nav>
  );
}
