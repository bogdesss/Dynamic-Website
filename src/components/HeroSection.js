import React, { useState } from 'react';
import { useValeOlpretuluiInfo } from '../context/SiteContext';
import ContactModal from './ContactModal';

const HeroSection = () => {
  const valeOlpretuluiInfo = useValeOlpretuluiInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-700" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 text-center">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-gray-700 dark:from-white dark:via-primary dark:to-gray-300 bg-clip-text text-transparent">
            {valeOlpretuluiInfo.content.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
            {valeOlpretuluiInfo.content.hero.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {valeOlpretuluiInfo.content.hero.description}
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={valeOlpretuluiInfo.content.hero.ctaLink}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {valeOlpretuluiInfo.content.hero.ctaText}
            </a>
          </div>
          
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
