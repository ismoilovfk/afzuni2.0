import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Modern Design',
      description: 'Clean and sleek interface with attention to detail'
    },
    {
      title: 'Responsive',
      description: 'Looks great on desktop, tablet, and mobile devices'
    },
    {
      title: 'Fast Performance',
      description: 'Optimized code for the best user experience'
    }
  ];

  return (
    <div className="features">
      <div className="container">
        <h2>Amazing Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 