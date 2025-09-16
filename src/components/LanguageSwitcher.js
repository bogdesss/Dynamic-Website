import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const flagSrc = (lng) => (lng === 'ro' ? 'https://flagcdn.com/ro.svg' : 'https://flagcdn.com/gb.svg');
  const label = (lng) => (lng === 'ro' ? 'Română' : 'English');

  return (
    <div className="relative">
      <button
        aria-label="Select language"
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-sm">
          <img src={flagSrc(currentLanguage)} alt={`${label(currentLanguage)} flag`} className="w-full h-full object-cover" />
        </div>
        <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          {availableLanguages.map((lng) => (
            <button
              key={lng}
              onClick={() => { changeLanguage(lng); setIsOpen(false); }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage === lng ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-sm flex-shrink-0">
                  <img src={flagSrc(lng)} alt={`${label(lng)} flag`} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{label(lng)}</span>
              </div>
              {currentLanguage === lng && (
                <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default LanguageSwitcher;


