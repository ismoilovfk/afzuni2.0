import React from 'react';
import './Advantages.css';

const Advantages = () => {
  const advantages = [
    {
      title: 'Логистика без границ',
      description: 'Доставляем товары по всему Таджикистану.',
      icon: '🚚'
    },
    {
      title: 'Современное хранение',
      description: 'Наши склады оснащены передовыми технологиями. Гарантируем сохранность вашего товара в любых условиях.',
      icon: '🏭'
    },
    {
      title: 'Партнерство и развитие',
      description: 'Помогаем брендам выйти на рынок Таджикистана и расширить свое присутствие. Ваш успех - наша главная цель!',
      icon: '🤝'
    },
    {
      title: 'Аналитика рынка',
      description: 'Предоставляем актуальные данные о трендах и возможностях рынка Таджикистана. Принимайте решения на основе реальных фактов.',
      icon: '📊'
    }
  ];

  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2>Наши Преимущества</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div className="advantage-card" key={index}>
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages; 