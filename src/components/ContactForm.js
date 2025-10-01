import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('contact.title')}
          </h1>
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center min-h-[2rem]" />
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg min-h-[8rem]" />
            </div>
            
            {/* Company Information */}
            <div className="space-y-8">
              <div className="bg-primary text-white p-6 rounded-lg min-h-[8rem]" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;