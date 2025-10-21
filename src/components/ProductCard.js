import React from 'react';

const ProductCard = ({ 
  slug, 
  title, 
  excerpt, 
  benefits = [], 
  body, 
  image, 
  ctaText 
}) => {
  // Default to product slug image if no explicit image is passed
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
      {/* Image wrapper */}
     <div className="relative h-56 bg-white flex items-center justify-center">
  <img
    src={imageSrc}
    alt={title}
    className="max-h-full max-w-full object-contain"
    onError={handleImageError}
  />
  {/* Fallback if image is missing */}
  <div className="hidden absolute inset-0 flex items-center justify-center text-6xl font-semibold text-accent">
    {title?.charAt(0)}
  </div>
</div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-raleway">{title}</h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-base text-accent mb-4 font-raleway">
            {excerpt}
          </p>
        )}

        {/* Body text */}
        {body && (
          <p className="text-base text-gray-600 mb-6 font-raleway">
            {body}
          </p>
        )}

        {/* Benefits */}
        {Array.isArray(benefits) && benefits.length > 0 && (
          <ul className="space-y-2 text-gray-600 mb-6 list-disc list-inside font-raleway">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}

        {/* CTA */}
        {ctaText && (
          <div className="mt-auto pt-4">
            <span className="inline-flex items-center text-sm font-semibold text-accent">
              {ctaText}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
