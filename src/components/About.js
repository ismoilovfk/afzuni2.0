import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>О нас</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="highlight">Мы не просто дистрибьюторы. Мы - революционеры рынка Таджикистана.</p>
            <p>Наша миссия - разрушать барьеры и создавать новые возможности для бизнеса.</p>
            
            <ul className="about-features">
              <li>
                <span className="feature-icon">✦</span>
                <span>Прорывные решения в логистике</span>
              </li>
              <li>
                <span className="feature-icon">✦</span>
                <span>Партнерская сеть по всей стране</span>
              </li>
              <li>
                <span className="feature-icon">✦</span>
                <span>Стабильный рост на протяжении 10+ лет</span>
              </li>
              <li>
                <span className="feature-icon">✦</span>
                <span>Команда профессионалов мирового уровня</span>
              </li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-container">
              <span className="image-text">Afzuni в действии</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 