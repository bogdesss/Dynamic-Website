import React from 'react';
import { Link } from 'react-router-dom';
import { useLactaprodInfo } from '../context/SiteContext';

const Header = () => {
  const lactaprodInfo = useLactaprodInfo();
  const menuItems = lactaprodInfo.menuItems;

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Modern Logo/Brand Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            {/* Logo Icon - Dairy/Research Theme */}
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                {lactaprodInfo.name}
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
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
