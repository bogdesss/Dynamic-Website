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
        <span className="text-3xl font-semibold text-green-300">
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
      <div className="grid gap-6 md:grid-cols-3">
        {partners.map((partner) => (
          <Card key={partner.name} title={partner.name}>
            <PartnerLogo logo={partner.logo} name={partner.name} />
            <p className="text-base text-gray-600">{partner.role}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default PartnersPage;
