import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// Добавляем некоторый код инициализации
document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized');
  // Проверяем, что DOM загружен и готов к рендерингу
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 