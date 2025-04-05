import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Надежный дистрибьютор в Таджикистане</h1>
        <p>Afzuni — путь к изобилию и процветанию</p>
        <Link to="contact" className="cta-button" smooth={true} duration={500}>
          Свяжитесь с нами
        </Link>
      </div>
    </section>
  );
};

export default Hero; 