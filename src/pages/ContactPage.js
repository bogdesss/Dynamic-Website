import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Card from '../components/Card';

const ContactPage = () => {
  const { t } = useTranslation();
  const contactItems = [
    { key: 'address', label: t('contact.addressLabel'), value: t('contact.address') },
    { key: 'workPoint', label: t('contact.workPointLabel'), value: t('contact.workPoint') },
    { key: 'county', label: t('contact.countyLabel'), value: t('contact.county') },
    { key: 'email', label: t('contact.emailLabel'), value: t('contact.email'), isEmail: true },
  ];

  return (
    <Section title={t('contact.title')} intro={t('contact.intro')}>
      <div className="grid gap-6 md:grid-cols-2">
        {contactItems.map((item) => (
          <Card key={item.key} title={item.label}>
            <p className="mt-2 text-base text-gray-700">{item.value}</p>
            {item.isEmail && (
              <div className="mt-6">
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="inline-flex items-center rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors duration-200"
                >
                  {t('contact.button')}
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ContactPage;
