import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Cool React App</h3>
            <p>A modern React application with a beautiful design</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Social</h4>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cool React App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 