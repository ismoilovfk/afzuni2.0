import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cover-image"></div>
      <div className="content-wrapper">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App; 