import React from 'react';
import { useCompanyInfo } from '../context/SiteContext';

const AboutSection = () => {
  const companyInfo = useCompanyInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-8">{companyInfo.content.about.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {companyInfo.content.about.description}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
