import React from 'react';
import { useTranslation } from 'react-i18next';

const GDPRPage = () => {
  const { t } = useTranslation();
  const list = t('gdpr.dataCollectedList', { returnObjects: true }) || [];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-6">{t('gdpr.title')}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{t('gdpr.intro')}</p>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">{t('gdpr.dataCollectedTitle')}</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              {Array.isArray(list) && list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">{t('gdpr.purposeTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t('gdpr.purposeText')}</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">{t('gdpr.legalTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t('gdpr.legalText')}</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">{t('gdpr.retentionTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t('gdpr.retentionText')}</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">{t('gdpr.contactTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t('gdpr.contactText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDPRPage;
