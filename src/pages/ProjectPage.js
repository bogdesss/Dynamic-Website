import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';

const ProjectPage = () => {
  const { t } = useTranslation();
  const objectives = t('project.obiectiveSecList', { returnObjects: true });
  const financing = t('project.programFinantare', { returnObjects: true });

  return (
    <div className="pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-600 to-emerald-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=1600&q=80')] opacity-20" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/70">{t('project.title')}</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{t('project.obiectivPrincipalTitle')}</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            {t('project.obiectivPrincipalBody')}
          </p>
        </div>
      </section>

      <Section title={t('project.obiectiveSecTitle')}>
        <div className="max-w-3xl mx-auto text-left">
          <ul className="space-y-4 text-gray-700 text-base list-disc list-inside">
            {objectives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title={t('project.programFinantareTitle')}>
        <div className="max-w-4xl mx-auto">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Program</dt>
              <dd className="mt-2 text-lg font-medium text-gray-900">{financing.program}</dd>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Submăsura</dt>
              <dd className="mt-2 text-lg font-medium text-gray-900">{financing.submasura}</dd>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Măsura</dt>
              <dd className="mt-2 text-lg font-medium text-gray-900">{financing.masura}</dd>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:col-span-2">
              <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Contract</dt>
              <dd className="mt-2 text-lg font-medium text-gray-900">{financing.contract}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section title={t('project.rezultateTitle')} intro={t('project.rezultateIntro')}>
        <div className="text-center">
          <Link
            to="/produse"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-700 transition-colors duration-200"
          >
            {t('home.ctaProducts')}
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default ProjectPage;
