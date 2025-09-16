import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'ro');

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const availableLanguages = ['ro', 'en'];

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
