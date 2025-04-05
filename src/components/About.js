import React from 'react';
import aboutImage from '../assets/images/about.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>О нас</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-tagline">Мы не просто дистрибьюторы. Мы - революционеры рынка Таджикистана.</p>
            <p>Наша миссия - разрушать барьеры и создавать новые возможности для бизнеса.</p>
            <ul className="about-features">
              <li><i className="fas fa-rocket"></i> Прорывные решения в логистике</li>
              <li><i className="fas fa-handshake"></i> Партнерская сеть по всей стране</li>
              <li><i className="fas fa-chart-line"></i> Стабильный рост на протяжении 10+ лет</li>
              <li><i className="fas fa-users"></i> Команда профессионалов мирового уровня</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Afzuni в действии" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 