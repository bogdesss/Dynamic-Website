import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">{t('about.title', 'About')}</h1>
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center min-h-[3rem]" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.section1Title', 'Section 1')}</h3>
              <div className="text-gray-600 dark:text-gray-300 min-h-[6rem]" />
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.section2Title', 'Section 2')}</h3>
              <div className="text-gray-600 dark:text-gray-300 min-h-[6rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
