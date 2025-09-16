import React from 'react';
import { useLactaprodInfo } from '../context/SiteContext';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const lactaprodInfo = useLactaprodInfo();
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('about.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {t('about.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.objectives.title')}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {t('about.objectives.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.benefits.title')}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {t('about.benefits.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
