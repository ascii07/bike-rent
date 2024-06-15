// src/Components/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <h1>Lotus</h1>
        </a>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={handleToggle}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={handleToggle}>About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={handleToggle}>Services</a>
          </li>
          <li className="navbar-item">
            <a href="#gallery" className="navbar-link" onClick={handleToggle}>Gallery</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={handleToggle}>Contact</a>
          </li>
          <li className="navbar-item navbar-item-special">
            <a href="#home" className="navbar-link special" onClick={handleToggle}>Get Started</a>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={handleToggle}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
