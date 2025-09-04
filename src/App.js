import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import ComingSoon from './components/ComingSoon';
import SocialMediaLinks from './components/SocialMediaLinks';

function App() {
  return (
    <Router>
      <SiteProvider>
        <div className="bg-white dark:bg-gray-900">
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<ComingSoon />} />
          </Routes>
          <SocialMediaLinks />
        </div>
      </SiteProvider>
    </Router>
  );
}

export default App;
  