import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Наши Преимущества</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-truck-fast"></i></div>
            <h3>Логистика без границ</h3>
            <p>Доставляем товары по всему Таджикистану.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-warehouse"></i></div>
            <h3>Современное хранение</h3>
            <p>Наши склады оснащены передовыми технологиями. Гарантируем сохранность вашего товара в любых условиях.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-handshake"></i></div>
            <h3>Партнерство и развитие</h3>
            <p>Помогаем брендам выйти на рынок Таджикистана и расширить свое присутствие. Ваш успех - наша главная цель!</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-chart-line"></i></div>
            <h3>Аналитика рынка</h3>
            <p>Предоставляем актуальные данные о трендах и возможностях рынка Таджикистана. Принимайте решения на основе реальных фактов.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 