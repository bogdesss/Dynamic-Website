import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Card from '../components/Card';

const HomePage = () => {
  const { t } = useTranslation();
  const scopulCards = t('home.scopulCards', { returnObjects: true });

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-500 to-green-400 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524593119773-7b18c6f4b6fe?auto=format&fit=crop&w=1600&q=80')] opacity-20" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">Valea Olprețului</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10">
              {t('home.heroSub')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produse"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-green-700 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                {t('home.ctaProducts')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                {t('home.ctaContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section id="scopul" title={t('home.scopulTitle')}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scopulCards.map((text, index) => (
            <Card key={index} body={text} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-green-100 px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-100 opacity-80" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl font-semibold text-gray-900">
              {t('home.rezultateTeaser')}
            </p>
            <Link
              to="/produse"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-700 transition-colors duration-200"
            >
              {t('home.ctaProducts')}
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
