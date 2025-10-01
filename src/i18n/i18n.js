import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import roTranslations from './content.ro.json';
import enTranslations from './content.en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ro: {
        translation: roTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: 'ro',
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
