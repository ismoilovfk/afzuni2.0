import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Свяжитесь с нами</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Адрес</h4>
                <p>Таджикистан, г. Худжанд, Мевагул, 16 микрорайон, територия ОАО "СОРБОН"</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h4>Телефон</h4>
                <p>+992 55-765-55-55</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@afzuni.ru</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://wa.me/99255765555" target="_blank" rel="noopener noreferrer" className="social-button">
                <span>Написать в WhatsApp</span>
              </a>
              <a href="https://t.me/99255765555" target="_blank" rel="noopener noreferrer" className="social-button">
                <span>Написать в Telegram</span>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Ваше имя" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Ваш Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Ваш телефон" />
              </div>
              <div className="form-group">
                <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 