import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import PartnersSection from './components/PartnersSection';
import BudgetSection from './components/BudgetSection';
import ContactForm from './components/ContactForm';
import ComingSoon from './components/ComingSoon';
import SocialMediaLinks from './components/SocialMediaLinks';

function App() {
  return (
    <Router>
      <SiteProvider>
        <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/project" element={<ProjectSection />} />
              <Route path="/partners" element={<PartnersSection />} />
              <Route path="/budget" element={<BudgetSection />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="*" element={<ComingSoon />} />
            </Routes>
          </main>
          <SocialMediaLinks />
        </div>
      </SiteProvider>
    </Router>
  );
}

export default App;
  