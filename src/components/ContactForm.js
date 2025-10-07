import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLactaprodInfo } from '../context/SiteContext';

const ContactForm = () => {
  const { t } = useTranslation();
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {t('contact.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">{t('contact.sections.contactInfo')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('contact.sections.address')}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{t('contact.address', { defaultValue: 'Sat Certeze, Comuna Certeze, Județul Satu Mare' })}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('contact.sections.phone')}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{t('contact.phone', { defaultValue: '+40 123 456 789' })}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('contact.sections.email')}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{t('contact.email', { defaultValue: 'lactaprodoas@gmail.com' })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company Information */}
            <div className="space-y-8">
              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('contact.sections.aboutCooperative')}</h3>
                <p className="text-white mb-4">
                  {t('contact.aboutText.description1')}
                </p>
                <p className="text-white">
                  {t('contact.aboutText.description2')}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;