import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    console.log('App component mounted');
    // Проверка доступности DOM элементов
    const rootElement = document.getElementById('root');
    console.log('Root element found:', rootElement !== null);
  }, []);
  
  return (
    <div className="app">
      <Header />
      <div style={{position: 'fixed', top: '10px', right: '10px', color: 'red', zIndex: 9999}}>
        App loaded
      </div>
      <Hero />
      <About />
      <Advantages />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 