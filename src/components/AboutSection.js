import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">{t('about.title')}</h1>
          {/* Structured content block */}
          <div className="space-y-10 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">{t('about.newContent.purpose.title')}</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {t('about.newContent.purpose.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2 text-primary">{t('about.newContent.mainObjective.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300">{t('about.newContent.mainObjective.text')}</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">{t('about.newContent.secondaryObjectives.title')}</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {t('about.newContent.secondaryObjectives.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2 text-primary">{t('about.newContent.researchResults.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300">{t('about.newContent.researchResults.intro')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
