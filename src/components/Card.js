import React from 'react';

const Card = ({ title, bullets, body, ctaText, href, children }) => {
  return (
    <article className="h-full rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6 sm:p-8 flex flex-col h-full">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {title}
          </h3>
        )}
        {body && (
          <p className="text-base text-gray-600 mb-4">
            {body}
          </p>
        )}
        {Array.isArray(bullets) && bullets.length > 0 && (
          <ul className="space-y-2 text-gray-600 mb-6 list-disc list-inside">
            {bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {children}
        {ctaText && href && (
          <div className="mt-auto pt-6">
            <a
              className="inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800"
              href={href}
            >
              {ctaText}
              <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
