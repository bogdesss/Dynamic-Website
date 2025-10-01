import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProjectInfo } from '../context/SiteContext';

const BudgetSection = () => {
  const { t } = useTranslation();
  const projectInfo = useProjectInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('budget.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {t('budget.description')}
          </p>
          
          {/* Budget Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 min-h-[8rem]" />

          {/* Detailed Budget Breakdown */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg min-h-[6rem]" />
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg min-h-[6rem]" />
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg min-h-[6rem]" />
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg min-h-[6rem]" />
          </div>

          {/* Total Budget */}
          <div className="mt-12 text-center">
            <div className="bg-primary text-white p-8 rounded-lg min-h-[6rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;
