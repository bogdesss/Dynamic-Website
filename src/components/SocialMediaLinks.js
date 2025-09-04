import React from 'react';
import { useSocialMediaLinks } from '../context/SiteContext';

const SocialMediaLinks = () => {
  const { socialMediaLinks } = useSocialMediaLinks();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-4">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default SocialMediaLinks;
