import React from 'react';
import { useCart } from '../context/CartContext';
import { products, getStockStatus } from '../data/products';

const ProductPage = () => {
  const { addToCart } = useCart();

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
            Valea Olpretului Cooperativa Agricola
          </h1>
          <p className="text-xl text-gray-600">
            Produse agricole proaspete și de calitate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const stockStatus = getStockStatus(product.stock);
            const isOutOfStock = product.stock === 'out_of_stock' || product.stock === 'low_stock';
            
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price.toFixed(2)} RON
                    </span>
                    
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      stockStatus.color === 'green' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {stockStatus.text}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isOutOfStock}
                    className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                      isOutOfStock
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                    }`}
                  >
                    {isOutOfStock ? 'Indisponibil' : 'Adaugă în coș'}
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
