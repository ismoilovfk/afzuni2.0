import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/Afzni-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <a href="#" className="logo-link">
            <img src={logo} alt="Afzuni Logo" className="logo large-logo" />
            <h1></h1>
          </a>
        </div>
        <nav>
          <ul>
            <li><Link to="about" smooth={true} duration={500}>О нас</Link></li>
            <li><Link to="services" smooth={true} duration={500}>Преимущества</Link></li>
            <li><Link to="partners" smooth={true} duration={500}>Партнеры</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 