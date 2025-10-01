import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
// Header background image removed for template cleanliness
// Logo removed for clean template

const Header = () => {
  const { t } = useTranslation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-100 dark:border-gray-700">
      {/* Global header image banner - above all content */}
      <div className="w-full overflow-hidden bg-white h-[80px]" aria-hidden="true" />

      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Language Switcher - Top Left */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Logo + Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                {t('header.companyName')}
              </span>
            </div>
          </div>
          
          {/* Modern Navigation - Right (Desktop) */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="relative text-gray-800 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium transition-colors duration-300 group"
              >
                {t('header.menu.home')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="relative text-gray-800 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium transition-colors duration-300 group"
              >
                {t('header.menu.products')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/project" 
                className="relative text-gray-800 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium transition-colors duration-300 group"
              >
                {t('header.menu.project')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/partners" 
                className="relative text-gray-800 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium transition-colors duration-300 group"
              >
                {t('header.menu.partners')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="relative text-gray-800 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium transition-colors duration-300 group"
              >
                {t('header.menu.contact')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(prev => !prev)}
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {/* Mobile Menu Panel */}
        {isMobileOpen && (
          <div className="md:hidden mt-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t('header.companyName')}</span>
            </div>
            <ul className="flex flex-col">
              <li>
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {t('header.menu.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {t('header.menu.products')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/project" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {t('header.menu.project')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/partners" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {t('header.menu.partners')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {t('header.menu.contact')}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
