import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLactaprodInfo } from '../context/SiteContext';

const ProjectSection = () => {
  const { t } = useTranslation();
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center text-primary">{t('project.title')}</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scopul (intro) */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.scope.title')}</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed text-left">{t('project.scope.p1')}</p>
                <p className="leading-relaxed text-left">{t('project.scope.p2')}</p>
                <p className="leading-relaxed text-left">{t('project.scope.p3')}</p>
              </div>
            </div>

            {/* Obiectiv principal */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.mainObjective.title')}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {(t('project.mainObjective.items', { returnObjects: true }) || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="leading-relaxed text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obiective secundare */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.secondaryObjectives.title')}</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {(t('project.secondaryObjectives.items', { returnObjects: true }) || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="leading-relaxed text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scopul final */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.finalScope.title')}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {(t('project.finalScope.items', { returnObjects: true }) || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span className="leading-relaxed text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
