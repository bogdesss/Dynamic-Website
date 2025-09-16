import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLactaprodInfo } from '../context/SiteContext';

const ProjectSection = () => {
  const { t } = useTranslation();
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('project.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {t('project.description')}
          </p>
          
          {/* Project Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.sections.projectInfo')}</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">{t('project.sections.title')}:</span>
                  <p className="text-gray-600 dark:text-gray-300">{t('project.title')}</p>
                </div>
                <div>
                  <span className="font-medium">{t('project.sections.duration')}:</span>
                  <p className="text-gray-600 dark:text-gray-300">{t('project.durationText')}</p>
                </div>
                <div>
                  <span className="font-medium">{t('project.sections.year')}:</span>
                  <p className="text-gray-600 dark:text-gray-300">{lactaprodInfo.project.startDate}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.sections.totalBudget')}</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">{t('project.sections.value')}:</span>
                  <p className="text-2xl font-bold text-primary">{lactaprodInfo.project.totalBudget}</p>
                </div>
                <div>
                  <span className="font-medium">{t('project.currencyText')}:</span>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{lactaprodInfo.project.totalBudgetRON.replace('lei', 'RON')}</p>
                </div>
                <div>
                  <span className="font-medium">{t('project.sections.exchangeRate')}:</span>
                  <p className="text-gray-600 dark:text-gray-300">{lactaprodInfo.project.exchangeRate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beneficiary Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{t('project.sections.beneficiaryActivities')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary text-white p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4 text-white">LACTAPROD OAȘ COOPERATIVĂ AGRICOLĂ</h4>
              <p className="text-white mb-4">
                <strong>{t('project.sections.budget')}:</strong> {lactaprodInfo.beneficiary.budget} ({lactaprodInfo.beneficiary.budgetRON.replace('lei', 'RON')})
              </p>
              <ul className="space-y-2">
                {t('project.beneficiaryActivities', { returnObjects: true }).map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
