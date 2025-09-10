import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

const ComingSoon = () => {
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
              În Curând
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Lucrăm din greu pentru a vă aduce acest conținut. Vă rugăm să reveniți în curând!
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Ce Vine:</h2>
              <ul className="text-left space-y-2">
                <li>• Informații detaliate despre serviciile noastre</li>
                <li>• Funcționalități interactive și instrumente</li>
                <li>• Mai mult conținut și resurse</li>
              </ul>
            </div>
            <div className="mt-8">
              <button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary text-white py-3 px-6 rounded mr-4"
              >
                Contactează-ne
              </button>
              <Link 
                to="/" 
                className="bg-secondary text-white py-3 px-6 rounded"
              >
                Mergi Acasă
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
