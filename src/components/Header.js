import React from 'react';
import { Link } from 'react-router-dom';
import { useNaturivisInfo } from '../context/SiteContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import BannerImage from '../img/Caseta-Afir.png';
import LogoImage from '../img/logo.png';

const Header = () => {
  const naturivisInfo = useNaturivisInfo();
  const { t } = useTranslation();
  const menuItems = [
    { key: 'home', path: '/' },
    { key: 'products', path: '/products' },
    { key: 'cart', path: '/cart' },
    { key: 'about', path: '/about' },
    { key: 'gdpr', path: '/gdpr' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-100 dark:border-gray-700">
      {/* Top banner above the menu */}
      <div className="w-full flex justify-center">
        <img 
          src={BannerImage} 
          alt="Top banner" 
          className="h-12 md:h-16 lg:h-20 w-auto object-contain"
        />
      </div>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Modern Logo/Brand Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            {/* Logo Image */}
            <img 
              src={LogoImage} 
              alt="Naturivis Logo" 
              className="h-12 w-auto object-contain"
            />
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                {naturivisInfo.name}
              </span>
            </div>
          </div>
          
          {/* Modern Navigation */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className="relative text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium transition-colors duration-300 group"
                >
                  {t(`nav.${item.key}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls: Language switcher + Mobile menu button */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
