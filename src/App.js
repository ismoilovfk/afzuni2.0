import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  HomePage, 
  AboutPage, 
  ServicesPage, 
  PartnersPage, 
  ContactPage 
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cover-image"></div>
        <div className="content-wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App; 