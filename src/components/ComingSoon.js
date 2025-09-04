import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCompanyInfo } from '../context/SiteContext';
import ContactModal from './ContactModal';

const ComingSoon = () => {
  const companyInfo = useCompanyInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-primary">
              Coming Soon
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're working hard to bring you this content. Please check back soon!
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">What's Coming:</h2>
              <ul className="text-left space-y-2">
                <li>• Detailed information about our services</li>
                <li>• Interactive features and tools</li>
                <li>• More content and resources</li>
              </ul>
            </div>
            <div className="mt-8">
              <button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary text-white py-3 px-6 rounded mr-4"
              >
                Contact Us
              </button>
              <Link 
                to="/" 
                className="bg-secondary text-white py-3 px-6 rounded"
              >
                Go Home
              </Link>
            </div>
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

export default ComingSoon;
