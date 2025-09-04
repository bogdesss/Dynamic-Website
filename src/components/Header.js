import React from 'react';
import { Link } from 'react-router-dom';
import { useCompanyInfo, useMenuItems } from '../context/SiteContext';

const Header = () => {
  const companyInfo = useCompanyInfo();
  const menuItems = useMenuItems();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            {companyInfo.name}
          </div>
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
