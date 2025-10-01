import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Cleansed template: no project-specific context
import ContactModal from './ContactModal';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-700"
            style={{
              backgroundImage:
                'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          {/* 2-column grid: text left, image right */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT: Text */}
            <div>
              <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
                {t('home.subtitle')}
              </h2>

              <div className="prose prose-lg dark:prose-invert mx-auto md:mx-0">
                <p className="text-left text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('home.p1')}
                </p>

                <p className="text-left text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                  {t('home.p2')}
                </p>

                <p className="text-left text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                  {t('home.p3')}
                </p>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="flex justify-center md:justify-end">
              <div className="rounded-2xl shadow-lg max-h-[400px] w-full md:w-[480px] h-[280px] bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
