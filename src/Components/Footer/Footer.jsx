// src/Components/Footer.jsx

import React from 'react';
import './Footer.css';
// import logo from '../Assets/image/logo.png'; // Replace with the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>"Lotus"</h2>
          <p>
            Lotus 365 Days bike rental self drive services. – A Pune-based travel agency; bringing you the best travel and tour across the country, offering an experience that is intensely thrilling. With years of experience, we have strong competence in providing you the best bike rental services and tourism. We have our own fleet of 105 bikes suiting various needs of domestic people and foreign tourists.
          </p>
        </div>
        <div className="footer-section services">
          <h3>Services</h3>
          <ul>
            <li>Bike Fleet</li>
            <li>Our Drivers</li>
            <li>Convenience and Comfort</li>
            <li>Wide Range of Bikes</li>
            <li>Terms And Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section our-services">
          <h3>Our Services</h3>
          <ul>
            <li>Best Prices in the Market</li>
            <li>Multiple KM Packages</li>
            <li>Business/Corporate Bike Rental</li>
            <li>Self-Drive Bike Rentals</li>
            <li>Wedding Bike Rentals</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Lotus 365 Days Days bike rental self drive services. All rights reserved. Designed by Rahul Solutions Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
