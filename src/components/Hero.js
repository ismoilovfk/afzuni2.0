import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Отладочная информация
    console.log("Hero component mounted");
    setLoaded(true);
  }, []);
  
  return (
    <div 
      className="hero" 
      style={{ 
        backgroundImage: `url("/images/back.png")`,
        backgroundColor: '#1a1a1a' // Резервный цвет, если изображение не загрузится
      }}
    >
      {loaded && <div style={{position: 'absolute', top: 0, left: 0, color: 'red', zIndex: 9999}}>Hero loaded</div>}
      <div className="hero-content">
        <h1>Надежный дистрибьютор в Таджикистане</h1>
        <p>Afzuni — путь к изобилию и процветанию</p>
        <div className="hero-buttons">
          <button>Свяжитесь с нами</button>
          <button className="secondary-button">Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 