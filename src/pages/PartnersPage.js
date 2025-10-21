import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Card from '../components/Card';

const PartnerLogo = ({ logo, name }) => {
  const [showFallback, setShowFallback] = React.useState(false);

  return (
    <div className="flex items-center justify-center h-24 rounded-xl bg-slate-100 mb-6 overflow-hidden">
      {!showFallback && (
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-16 object-contain"
          onError={() => setShowFallback(true)}
        />
      )}
      {showFallback && (
        <span className="text-3xl font-semibold text-accent">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
};

const PartnersPage = () => {
  const { t } = useTranslation();
  const partners = t('partners.list', { returnObjects: true });

  return (
    <Section title={t('partners.title')}>
      <div className="grid gap-6 md:grid-cols-3 font-raleway">
        {partners.map((partner) => (
          <Card key={partner.name} title={partner.name}>
            <PartnerLogo logo={partner.logo} name={partner.name} />
            <p className="text-base text-gray-600 font-raleway">{partner.role}</p>

            {partner.intro && (
              <p className="mt-4 text-sm text-gray-700 whitespace-pre-line font-raleway">{partner.intro}</p>
            )}

            {Array.isArray(partner.projects) && partner.projects.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 font-raleway">{t('partners.labels.projects')}</h3>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700 font-raleway">
                  {partner.projects.map((proj, idx) => (
                    <li key={idx}>{proj}</li>
                  ))}
                </ul>
              </div>
            )}

            {partner.involvement && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 font-raleway">{t('partners.labels.involvement')}</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line font-raleway">{partner.involvement}</p>
              </div>
            )}

            {partner.processing && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 font-raleway">{t('partners.labels.processing')}</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line font-raleway">{partner.processing}</p>
              </div>
            )}

            {Array.isArray(partner.innovation) && partner.innovation.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 font-raleway">{t('partners.labels.innovation')}</h3>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700 font-raleway">
                  {partner.innovation.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default PartnersPage;
