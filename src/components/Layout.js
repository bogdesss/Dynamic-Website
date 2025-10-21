import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import headerBanner from '../Img/Header.png'; // your banner

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
    <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col font-raleway">
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        
        {/* 🔹 Global Banner above menu */}
        <div className="w-full h-[40px] md:h-[50px] lg:h-[60px] overflow-hidden bg-white">
          <img
            src={headerBanner}
            alt="Header Banner"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 🔹 Navigation Menu */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 flex items-center justify-center">
                <img
                  src="/img/logo.png"
                  alt="Naturivis Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">{t('brand.name')}</p>
                <p className="text-sm text-gray-500">{t('brand.tagline')}</p>
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
                        isActive ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
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

        {/* 🔹 Mobile Menu */}
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-3 gap-3 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                end={item.path === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-center transition-colors duration-200 ${
                      isActive ? 'bg-primary text-white' : 'bg-slate-100 text-gray-700'
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
          © {new Date().getFullYear()} Naturivis – proiect de valorificare a bioresurselor vegetale.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
