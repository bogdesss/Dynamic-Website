import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProjectInfo } from '../context/SiteContext';

const ProjectSection = () => {
  const { t } = useTranslation();
  const projectInfo = useProjectInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center text-primary">{t('project.title')}</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scopul (intro) */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.scope.title')}</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 min-h-[6rem]">
                {/* Placeholder content intentionally left blank for template */}
              </div>
            </div>

            {/* Obiectiv principal */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.mainObjective.title')}</h3>
              <div className="text-gray-700 dark:text-gray-300 min-h-[4rem]" />
            </div>

            {/* Obiective secundare */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.secondaryObjectives.title')}</h3>
              <div className="text-gray-700 dark:text-gray-300 min-h-[6rem]" />
            </div>

            {/* Scopul final */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('project.finalScope.title')}</h3>
              <div className="text-gray-700 dark:text-gray-300 min-h-[4rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
