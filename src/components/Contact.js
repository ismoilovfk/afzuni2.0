import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Здесь можно добавить реальную отправку формы на сервер
    // Для примера просто показываем успешное сообщение
    setAlert({
      show: true,
      message: 'Ваше сообщение успешно отправлено!',
      type: 'success'
    });
    
    // Очищаем форму
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        type: ''
      });
    }, 3000);
  };
  
  return (
    <section id="contact">
      <div className="container">
        <h2>Свяжитесь с нами</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <i className="fas fa-map-marker-alt"></i> Таджикистан, г. Худжанд, Мевагул, 16 микрорайон, територия ОАО "СОРБОН"
            </p>
            <p className="phone-link">
              <a href="tel:+992557655555" rel="noopener noreferrer">
                <i className="fas fa-phone"></i> +992 55-765-55-55
              </a>
            </p>
            <p className="whatsapp-link">
              <a href="https://wa.me/992557655555" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> Написать в WhatsApp
              </a>
            </p>
            <p className="email-link">
              <a href="mailto:info@afzuni.ru" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i> info@afzuni.ru
              </a>
            </p>
            <p className="telegram-link">
              <a href="https://t.me/afzuni_tj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram-plane"></i> Написать в Telegram
              </a>
            </p>
          </div>
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Ваше имя" 
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Ваш email" 
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea 
              name="message" 
              placeholder="Ваше сообщение" 
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
      
      {alert.show && (
        <div className={`alert-box alert-${alert.type}`}>
          {alert.message}
        </div>
      )}
    </section>
  );
};

export default Contact; 