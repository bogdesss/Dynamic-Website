import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CustomerInfoModal from './CustomerInfoModal';
import { useTranslation } from 'react-i18next';

const LiveCart = () => {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ top: 160, right: 16 }); // default lower position
  const [isDragging, setIsDragging] = useState(false);
  // Note: using movementX/movementY for simplicity; no offset ref needed

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition((prev) => {
        const newRight = Math.max(0, prev.right - e.movementX);
        const newTop = Math.max(0, prev.top + e.movementY);
        return { top: newTop, right: newRight };
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleEmailSent = (message) => {
    setSuccessMessage(message);
    clearCart();
    // Clear success message after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  const cartData = {
    items,
    totalPrice: getTotalPrice(),
    totalItems: getTotalItems()
  };

  if (items.length === 0) {
    return (
      <div
        ref={containerRef}
        className="fixed w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
        style={{ top: position.top, right: position.right }}
      >
        <div className="text-center cursor-move select-none" onMouseDown={startDrag}>
          <div className="text-gray-500 text-sm mb-2">
            🛒 {t('liveCart.empty')}
          </div>
          <Link 
            to="/products"
            className="text-primary hover:text-primary/90 text-sm font-medium"
          >
            {t('liveCart.viewProducts')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 max-h-96 overflow-y-auto"
      style={{ top: position.top, right: position.right }}
    >
      <div className="flex items-center justify-between mb-3 cursor-move select-none" onMouseDown={startDrag}>
        <h3 className="text-lg font-semibold text-gray-900">
          {t('liveCart.yourCart')} ({getTotalItems()})
        </h3>
        <Link 
          to="/cart"
          className="text-green-600 hover:text-green-700 text-sm font-medium"
        >
          {t('liveCart.viewAll')}
        </Link>
      </div>

      <div className="space-y-2 mb-3">
        {items.slice(0, 3).map((item) => (
          <div key={item.id} className="flex items-center justify-between text-sm">
            <div className="flex-1">
              <div className="font-medium text-gray-900 truncate">
                {t(`products.${item.id}.title`, { defaultValue: item.title })}
              </div>
              <div className="text-gray-500">
                {item.quantity} × {item.price.toFixed(2)} RON
              </div>
            </div>
            <div className="text-gray-900 font-medium">
              {(item.price * item.quantity).toFixed(2)} RON
            </div>
          </div>
        ))}
        
        {items.length > 3 && (
          <div className="text-center text-gray-500 text-sm">
            {t('liveCart.moreItems', { count: items.length - 3 })}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold text-gray-900">
            {t('liveCart.total')}
          </span>
          <span className="text-xl font-bold text-primary">
            {getTotalPrice().toFixed(2)} RON
          </span>
        </div>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors text-center block font-medium"
        >
          {t('liveCart.checkout')}
        </button>
      </div>
      
      {successMessage && (
        <div className="mt-2 p-2 bg-primary/10 border border-primary/20 text-primary rounded text-sm">
          {successMessage}
        </div>
      )}
      
      <CustomerInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartData={cartData}
        onEmailSent={handleEmailSent}
      />
    </div>
  );
};

export default LiveCart;
