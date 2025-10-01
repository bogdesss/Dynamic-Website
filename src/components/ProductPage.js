import React from 'react';
import { useCart } from '../context/CartContext';
import { products, getStockStatus } from '../data/products';
import { useTranslation } from 'react-i18next';

const ProductPage = () => {
  const { addToCart } = useCart();
  const { t } = useTranslation();

  const handleAddToCart = (product) => {
    if (product.stock === 'in_stock') {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const stockStatus = getStockStatus(product.stock);
            const isOutOfStock = product.stock === 'out_of_stock' || product.stock === 'low_stock';
            
            return (
                  <div
      key={product.id}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* IMAGE: edge-to-edge, fixed aspect, subtle hover zoom */}
      <div className="relative aspect-square bg-gray-100 p-4">
  <img
    src={product.image}
    alt={t(`products.${product.id}.title`, { defaultValue: product.title })}
    loading="lazy"
    decoding="async"
    className="absolute inset-0 w-full h-full object-contain"
  />
</div>

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-900">{t(`products.${product.id}.title`, { defaultValue: product.title })}</h3>

        <p className="text-gray-600">{t(`products.${product.id}.description`, { defaultValue: product.description })}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">{product.price.toFixed(2)} RON</span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              stockStatus.color === 'green' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {t(`product.stock.${product.stock}`)}
          </span>
        </div>

    <button
      onClick={() => handleAddToCart(product)}
      disabled={isOutOfStock}
      className={`mt-3 w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
        isOutOfStock
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
      }`}
    >
      {isOutOfStock ? t('product.unavailable') : t('product.addToCart')}
    </button>
  </div>
</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
