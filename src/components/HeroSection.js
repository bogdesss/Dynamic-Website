import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLactaprodInfo } from '../context/SiteContext';
import ContactModal from './ContactModal';

const HeroSection = () => {
  const lactaprodInfo = useLactaprodInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-8">{lactaprodInfo.content.hero.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {lactaprodInfo.content.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {lactaprodInfo.content.hero.description}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {lactaprodInfo.address}
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary text-white py-3 px-6 rounded"
          >
            {lactaprodInfo.content.hero.ctaText}
          </button>
        </div>
      </section>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
