import React from 'react';
import { useLactaprodInfo } from '../context/SiteContext';

const AboutSection = () => {
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {lactaprodInfo.content.project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {lactaprodInfo.content.project.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Obiectivele Proiectului</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Dezvoltarea de tehnologii inovatoare în industria lactatelor</li>
                <li>• Îmbunătățirea calității produselor lactate</li>
                <li>• Creșterea eficienței proceselor de producție</li>
                <li>• Promovarea durabilității în sectorul agricol</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Beneficiile Așteptate</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Tehnologii mai eficiente și durabile</li>
                <li>• Produse lactate de calitate superioară</li>
                <li>• Colaborare între parteneri specializați</li>
                <li>• Contribuție la dezvoltarea sectorului agricol</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
