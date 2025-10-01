import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const { t } = useTranslation();
  const items = t('products.items', { returnObjects: true });

  return (
    <div className="py-16">
      <Section title={t('products.pageTitle')}>
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <ProductCard key={item.slug} {...item} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProductsPage;
