// src/Pages/HomePage.jsx

import React from 'react';
import './Home.css';


import bike2 from '../Assets/bike2.png';
import bike3 from '../Assets/bike3.png';
import bike4 from '../Assets/bike4.png';
import bike5 from '../Assets/bike5.png';
import bike6 from '../Assets/bike6.png';
import bike7 from '../Assets/bike7.png';
import bike8 from '../Assets/bike8.png';
import bike9 from '../Assets/bike9.png';
import bike10 from '../Assets/bike10.png';
import bike11 from '../Assets/bike11.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>BIKE FOR RENT</h1>
          <p>
            We also have a 24 X 7 helpdesk for seamless coordination with our clients in order to provide the best & hassle-free professional quality bike rental services. We take great pride in customer care and satisfaction.
          </p>
        </div>
        <div className="hero-image-container">
          <img src={bike11} alt="Bike for Rent" className="hero-image" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-image-container">
            <img src={bike10} alt="Bike Rental Service" className="about-image" />
            <div className="experience-badge">25 Year<br />Experience</div>
          </div>
          <div className="about-text">
            <h2>ABOUT US</h2>
            <h1>Lotus 365 Bike Rental Services</h1>
            <p>
              Lotus 365 bike rental services – A Pune-based travel agency; bringing you the best travel and tour across the country, offering an experience that is intensely thrilling. With years of experience, we have strong competence in providing you the best bike rental services and tourism. We have our own fleet of bikes suiting various needs of domestic people and foreign tourists.
            </p>
            <p>
              All the rental bikes are new and well-maintained and are driven by highly experienced and very courteous chauffeurs. We offer bike rentals from Pune.
            </p>
            <button className="call-now-button">Call Now</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="service">
          <img src={bike6} alt="Service 1" className="service-image" />
          <div className="service-text">
            <h3>OUR FLEET</h3>
            <p>
              Our fleet consists of top-notch bikes suitable for all kinds of terrain and rides. From mountain bikes to cruisers, we have everything to cater to your adventure needs.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={bike7} alt="Service 2" className="service-image" />
          <div className="service-text">
            <h3>BIKERS</h3>
            <p>
              Our bikers are highly skilled and experienced in providing the best riding experience. Safety and customer satisfaction are their top priorities.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={bike8} alt="Service 3" className="service-image" />
          <div className="service-text">
            <h3>COMFORT & CONVENIENCE</h3>
            <p>
              Enjoy our bikes with top-notch features and comforts. Whether you're looking for a leisure ride or a thrilling adventure, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Our Bikes Section */}
      <section id="gallery" className="our-bikes-section">
        <h2>Our Bikes</h2>
        <div className="bikes-grid">
          <div className="bike-card">
            <img src={bike9} alt="Bike 1" className="bike-image" />
            <p>Bike Model 1</p>
          </div>
          <div className="bike-card">
            <img src={bike2} alt="Bike 2" className="bike-image" />
            <p>Bike Model 2</p>
          </div>
          <div className="bike-card">
            <img src={bike3} alt="Bike 3" className="bike-image" />
            <p>Bike Model 3</p>
          </div>
          <div className="bike-card">
            <img src={bike4} alt="Bike 4" className="bike-image" />
            <p>Bike Model 4</p>
          </div>
          <div className="bike-card">
            <img src={bike5} alt="Bike 5" className="bike-image" />
            <p>Bike Model 5</p>
          </div>
          <div className="bike-card">
            <img src={bike10} alt="Bike 6" className="bike-image" />
            <p>Bike Model 6</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact-us-section">
        <div className="contact-form">
          <h2>Send Us A Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Messages.." rows="5"></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <label>
                I agree to the <span>terms of services</span> and <span>privacy policy</span>
              </label>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="contact-item">
            <i className="fa fa-phone"></i>
            <p>Call Now-9999999999</p>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <p>Email Us-Lotus365@support.com</p>
          </div>
          <div className="contact-item">
            <i className="fa fa-map-marker"></i>
            <p>Location-Pune,India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
