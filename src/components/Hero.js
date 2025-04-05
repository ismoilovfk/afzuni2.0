import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Amazing App</h1>
        <p>A modern React application with a beautiful background</p>
        <div className="hero-buttons">
          <button>Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 