import React from 'react';
import { useLactaprodInfo } from '../context/SiteContext';

const BudgetSection = () => {
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {lactaprodInfo.content.budget.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {lactaprodInfo.content.budget.description}
          </p>
          
          {/* Budget Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Capitolul 1</h3>
              <p className="text-2xl font-bold mb-2">{lactaprodInfo.budget.chapter1.amount}</p>
              <p className="text-sm opacity-90">{lactaprodInfo.budget.chapter1.title}</p>
            </div>
            
            <div className="bg-secondary text-white p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Capitolul 2</h3>
              <p className="text-2xl font-bold mb-2">{lactaprodInfo.budget.chapter2.amount}</p>
              <p className="text-sm opacity-90">{lactaprodInfo.budget.chapter2.title}</p>
            </div>
            
            <div className="bg-accent text-white p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Capitolul 3</h3>
              <p className="text-2xl font-bold mb-2">{lactaprodInfo.budget.chapter3.amount}</p>
              <p className="text-sm opacity-90">{lactaprodInfo.budget.chapter3.title}</p>
            </div>
            
            <div className="bg-gray-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Capitolul 4</h3>
              <p className="text-2xl font-bold mb-2">{lactaprodInfo.budget.chapter4.amount}</p>
              <p className="text-sm opacity-90">{lactaprodInfo.budget.chapter4.title}</p>
            </div>
          </div>

          {/* Detailed Budget Breakdown */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {lactaprodInfo.budget.chapter1.title} - {lactaprodInfo.budget.chapter1.amount}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {lactaprodInfo.budget.chapter1.description}
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {lactaprodInfo.budget.chapter2.title} - {lactaprodInfo.budget.chapter2.amount}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {lactaprodInfo.budget.chapter2.description}
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {lactaprodInfo.budget.chapter3.title} - {lactaprodInfo.budget.chapter3.amount}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {lactaprodInfo.budget.chapter3.description}
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {lactaprodInfo.budget.chapter4.title} - {lactaprodInfo.budget.chapter4.amount}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {lactaprodInfo.budget.chapter4.description}
              </p>
            </div>
          </div>

          {/* Total Budget */}
          <div className="mt-12 text-center">
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Buget Total Proiect</h3>
              <p className="text-4xl font-bold mb-2">{lactaprodInfo.project.totalBudget}</p>
              <p className="text-xl opacity-90">{lactaprodInfo.project.totalBudgetRON}</p>
              <p className="text-sm mt-2 opacity-75">
                Curs de schimb: {lactaprodInfo.project.exchangeRate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;
