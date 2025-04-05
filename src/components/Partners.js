import React, { useState } from 'react';
import partnersData from '../data/partnersData';
import './Partners.css';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  
  const openPartnerModal = (partner) => {
    setSelectedPartner(partner);
  };
  
  const closePartnerModal = () => {
    setSelectedPartner(null);
  };
  
  return (
    <section id="partners">
      <div className="container">
        <h2>Наши партнеры</h2>
        <p className="partners-intro">Мы гордимся сотрудничеством с ведущими брендами, которые доверяют нам свой бизнес в Таджикистане.</p>
        <div className="partner-grid">
          {Object.values(partnersData).map((partner) => (
            <div 
              key={partner.id} 
              className={`partner-card ${partner.id === 'stamba' ? 'stamba-card' : ''}`}
              onClick={() => openPartnerModal(partner)}
            >
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
      
      {selectedPartner && (
        <div id="partner-info" className="visible" onClick={(e) => {
          if (e.target.id === 'partner-info') closePartnerModal();
        }}>
          <div className="partner-info-header">
            <a 
              id="partner-logo-link" 
              href={selectedPartner.website} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                id="partner-logo" 
                src={selectedPartner.logo} 
                alt={`Логотип ${selectedPartner.name}`} 
              />
            </a>
            <h2 id="partner-name">{selectedPartner.name}</h2>
          </div>
          <p id="partner-description">{selectedPartner.description}</p>
          
          {selectedPartner.products && selectedPartner.products.length > 0 && (
            <div id="partner-products-section">
              <h3>Продукция</h3>
              <ul id="partner-products">
                {selectedPartner.products.map((product, index) => (
                  <li key={index}>
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button className="close-button" onClick={closePartnerModal} aria-label="Закрыть"></button>
        </div>
      )}
    </section>
  );
};

export default Partners; 