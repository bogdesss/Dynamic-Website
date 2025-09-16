import React, { createContext, useContext, useState, useEffect } from 'react';
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

  const getLanguageFlag = (lng) => {
    switch (lng) {
      case 'ro':
        return '🇷🇴';
      case 'en':
        return '🇬🇧';
      default:
        return '🇷🇴';
    }
  };

  const getLanguageName = (lng) => {
    switch (lng) {
      case 'ro':
        return 'Română';
      case 'en':
        return 'English';
      default:
        return 'Română';
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      getLanguageFlag,
      getLanguageName,
      availableLanguages: ['ro', 'en']
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
