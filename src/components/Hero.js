import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div 
      className="hero" 
      style={{ backgroundImage: `url("/back.png")` }}
    >
      <div className="hero-content">
        <h1>Надежный дистрибьютор в Таджикистане</h1>
        <p>Afzuni — путь к изобилию и процветанию</p>
        <div className="hero-buttons">
          <button>Свяжитесь с нами</button>
          <button className="secondary-button">Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 