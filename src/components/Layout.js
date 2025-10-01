import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Layout = ({ children }) => {
  const { t } = useTranslation();

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/produse', key: 'products' },
    { path: '/proiect', key: 'project' },
    { path: '/parteneri', key: 'partners' },
    { path: '/contact', key: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col">
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                VO
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">Valea Olprețului</p>
                <p className="text-sm text-gray-500">Bioresurse vegetale & produse inovative</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navItems.map((item) => (
                  <NavLink
                    key={item.key}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive ? 'text-green-700' : 'text-gray-600 hover:text-gray-900'
                      }`
                    }
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                ))}
              </nav>
              <LanguageSelector />
            </div>
          </div>
        </div>
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-3 gap-3 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-center transition-colors duration-200 ${
                    isActive ? 'bg-green-600 text-white' : 'bg-slate-100 text-gray-700'
                  }`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Valea Olprețului – proiect de valorificare a bioresurselor vegetale.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
