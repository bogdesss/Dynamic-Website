import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'ro');

  useEffect(() => {
    if (i18n.language && i18n.language !== language) {
      setLanguage(i18n.language);
    }
  }, [i18n.language, language]);

  const handleChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <label className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600">
      <span className="sr-only">Select language</span>
      <select
        value={language}
        onChange={handleChange}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="ro">RO</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
};

export default LanguageSelector;
