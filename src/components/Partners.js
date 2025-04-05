import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    'Мартин', 'dyadya-vanya', 'voron', 'Stamba', 
    'pasteroni', 'sibbalt', 'mikado', 'hlebprom', 
    'baraket', 'sibyksys'
  ];

  return (
    <section id="partners" className="partners">
      <div className="container">
        <h2>Наши партнеры</h2>
        <p className="partners-intro">
          Мы гордимся сотрудничеством с ведущими брендами, которые доверяют нам свой бизнес в Таджикистане.
        </p>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <div className="partner-logo">
                <span>{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 