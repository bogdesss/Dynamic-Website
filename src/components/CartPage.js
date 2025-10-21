import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CustomerInfoModal from './CustomerInfoModal';
import { useTranslation } from 'react-i18next';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart, getTotalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { t } = useTranslation();

  const handleSendEmail = () => {
    setIsModalOpen(true);
  };

  const handleEmailSent = (message) => {
    setSuccessMessage(message);
    clearCart();
    // Clear success message after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">
              {t('cart.title')}
            </h1>
            <div className="bg-white rounded-lg shadow-md p-12">
              <div className="text-gray-500 text-xl mb-4">
                🛒 {t('cart.emptyTitle')}
              </div>
              <p className="text-gray-600">
                {t('cart.emptySubtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const cartData = {
    items,
    totalPrice: getTotalPrice(),
    totalItems: getTotalItems()
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('cart.title')}
          </h1>
          <p className="text-xl text-gray-600">
            Naturivis
          </p>
          
          {successMessage && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {successMessage}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('cart.itemsInCart')} ({items.length})
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div key={item.id} className="px-6 py-4 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t(`products.${item.id}.title`, { defaultValue: item.title })}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t(`products.${item.id}.description`, { defaultValue: item.description })}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">
                      {(item.price * item.quantity).toFixed(2)} RON
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.price.toFixed(2)} {t('cart.pricePerUnit')}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-semibold text-gray-900">
                {t('cart.total')}
              </span>
              <span className="text-2xl font-bold text-green-600">
                {getTotalPrice().toFixed(2)} RON
              </span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={clearCart}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('cart.clear')}
              </button>
              <button
                onClick={handleSendEmail}
                className="flex-1 py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                {t('cart.checkout')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <CustomerInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartData={cartData}
        onEmailSent={handleEmailSent}
      />
    </div>
  );
};

export default CartPage;
