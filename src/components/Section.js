import React from 'react';

const Section = ({ id, title, intro, children }) => {
  return (
    <section id={id} className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || intro) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-raleway">
                {title}
              </h2>
            )}
            {intro && (
              <p className="text-lg text-gray-600 font-raleway">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
