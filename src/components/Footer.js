import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Afzuni</h3>
            <p>Надежный дистрибьютор в Таджикистане</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Навигация</h4>
              <ul>
                <li><a href="#about">О нас</a></li>
                <li><a href="#advantages">Преимущества</a></li>
                <li><a href="#partners">Партнеры</a></li>
                <li><a href="#contact">Контакты</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Контакты</h4>
              <ul>
                <li><a href="tel:+99255765555">+992 55-765-55-55</a></li>
                <li><a href="mailto:info@afzuni.ru">info@afzuni.ru</a></li>
                <li>г. Худжанд, Мевагул, 16 микрорайон</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Afzuni. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 