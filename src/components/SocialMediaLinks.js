import React from 'react';
import { useSocialMediaLinks } from '../context/SiteContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SocialMediaLinks = () => {
  const { socialMediaLinks } = useSocialMediaLinks();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <ul className="flex space-x-4">
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Link
              to="/gdpr"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              {t('footer.gdpr')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialMediaLinks;
