import React from 'react';
import { useLactaprodInfo } from '../context/SiteContext';

const ProjectSection = () => {
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {lactaprodInfo.content.project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {lactaprodInfo.content.project.description}
          </p>
          
          {/* Project Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Informații Proiect</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Titlu:</span>
                  <p className="text-gray-600 dark:text-gray-300">{lactaprodInfo.project.title}</p>
                </div>
                <div>
                  <span className="font-medium">Durată:</span>
                  <p className="text-gray-600 dark:text-gray-300">{lactaprodInfo.project.duration}</p>
                </div>
                <div>
                  <span className="font-medium">Anul:</span>
                  <p className="text-gray-600 dark:text-gray-300">{lactaprodInfo.project.startDate}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Buget Total</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Valoare:</span>
                  <p className="text-2xl font-bold text-primary">{lactaprodInfo.project.totalBudget}</p>
                </div>
                <div>
                  <span className="font-medium">Lei:</span>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{lactaprodInfo.project.totalBudgetRON}</p>
                </div>
                <div>
                  <span className="font-medium">Curs schimb:</span>
                  <p className="text-gray-600 dark:text-gray-300">{lactaprodInfo.project.exchangeRate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beneficiary Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Activități Beneficiar Principal</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary bg-opacity-10 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">LactaProd SRL</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Buget:</strong> {lactaprodInfo.beneficiary.budget} ({lactaprodInfo.beneficiary.budgetRON})
                </p>
                <ul className="space-y-2">
                  {lactaprodInfo.beneficiary.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{activity}</span>
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
