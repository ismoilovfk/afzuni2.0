import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>Afzuni</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#about">О нас</a></li>
            <li><a href="#advantages">Преимущества</a></li>
            <li><a href="#partners">Партнеры</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 