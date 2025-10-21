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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-accent text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/80">
                Naturivis
              </p>
              <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-6 font-raleway">
                {t('home.heroTitle')}
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-10 font-raleway">
                {t('home.heroSub')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/produse"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg hover:shadow-xl transition-shadow duration-200"
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

            {/* Placeholder image column */}
            <div className="w-full">
              <div className="aspect-[4/3] w-full rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 overflow-hidden flex items-center justify-center">
                <img
                  src="/img/fruits.jpg"
                  alt="Fructe proaspete"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scopul proiectului Section */}
      <Section id="scopul" title={t('home.scopulTitle')}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scopulCards.map((text, index) => (
            <Card key={index} body={text} />
          ))}
        </div>
      </Section>

      {/* Rezultate teaser Section */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-accent/20 px-6 py-12 sm:px-12 sm:py-16">
          <div
            className="absolute inset-0 bg-gradient-to-r from-accent/10 via-white to-accent/10 opacity-80"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl font-semibold text-gray-900 font-raleway">
              {t('home.rezultateTeaser')}
            </p>
            <Link
              to="/produse"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent/90 transition-colors duration-200"
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
