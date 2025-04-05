import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
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