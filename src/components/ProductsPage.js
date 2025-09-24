import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { t } = useTranslation();

  const items = [
    { key: 'telemea' },
    { key: 'ghee' },
    { key: 'yogurt' },
    { key: 'cheese' },
    { key: 'whey' }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-primary">{t('products.introTitle')}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(({ key }) => (
              <article key={key} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col">
                {/* Image placeholder from public/img as PNG */}
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    src={`/img/${key}.png`}
                    alt={t(`products.${key}.title`)}
                    className="w-full h-48 object-contain p-4"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{t(`products.${key}.title`)}</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{t(`products.${key}.desc`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;


