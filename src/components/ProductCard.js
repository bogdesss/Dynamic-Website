import React from 'react';

const ProductCard = ({ slug, title, excerpt, benefits = [], body, image, ctaText }) => {
  const imageSrc = image || `/images/products/${slug}.jpg`;

  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none';
    const fallback = event.currentTarget.nextElementSibling;
    if (fallback) {
      fallback.classList.remove('hidden');
    }
  };

  return (
    <article className="flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-56 bg-gradient-to-br from-green-100 via-white to-green-200">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
          onError={handleImageError}
        />
        <div className="hidden absolute inset-0 flex items-center justify-center text-6xl font-semibold text-green-300">
          {title?.charAt(0)}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
        {excerpt && <p className="text-base text-green-700 mb-4">{excerpt}</p>}
        {body && <p className="text-base text-gray-600 mb-6">{body}</p>}
        {Array.isArray(benefits) && benefits.length > 0 && (
          <ul className="space-y-2 text-gray-600 mb-6 list-disc list-inside">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}
        {ctaText && (
          <div className="mt-auto pt-4">
            <span className="inline-flex items-center text-sm font-semibold text-green-700">
              {ctaText}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
