import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLactaprodInfo } from '../context/SiteContext';

const PartnersSection = () => {
  const { t } = useTranslation();
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('partners.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {t('partners.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t('partners.partnersData', { returnObjects: true }).map((partner, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {partner.name}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">{t('partners.sections.allocatedBudget')}</h4>
                  <p className="text-xl font-bold text-primary">{partner.budget}</p>
                  <p className="text-gray-600 dark:text-gray-300">({partner.budgetRON})</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">{t('partners.sections.researchTeam')}</h4>
                  <ul className="space-y-2">
                    {partner.team.map((member, memberIndex) => (
                      <li key={memberIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">{t('partners.sections.activities')}</h4>
                  <ul className="space-y-2">
                    {partner.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-primary text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{t('partners.sections.totalPartners')}</h3>
              <p className="text-xl">50.000 EURO (243.565,00 RON)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
