import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Afzni-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Afzuni Logo" className="logo large-logo" />
            <h1></h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/services">Преимущества</Link></li>
            <li><Link to="/partners">Партнеры</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 