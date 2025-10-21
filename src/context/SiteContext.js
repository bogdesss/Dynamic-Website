import React, { createContext, useState, useContext, useEffect } from 'react';
import { companyConfig } from '../config/company';
import { lactaprodConfig } from '../config/lactaprod';
import { naturivisConfig } from '../config/naturivis';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  // Initialize with company config
  const [companyInfo, setCompanyInfo] = useState(companyConfig);
  const [menuItems, setMenuItems] = useState(companyConfig.menuItems);
  const [themeColors, setThemeColors] = useState(companyConfig.colors);
  const [socialMediaLinks, setSocialMediaLinks] = useState(companyConfig.socialMediaLinks);
  
  // LactaProd specific state
  const [lactaprodInfo, setLactaprodInfo] = useState(lactaprodConfig);
  
  // Naturivis specific state
  const [naturivisInfo, setNaturivisInfo] = useState(naturivisConfig);

  // Update CSS custom properties when colors change
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themeColors.primary);
    root.style.setProperty('--secondary-color', themeColors.secondary);
    root.style.setProperty('--accent-color', themeColors.accent);
    root.style.setProperty('--background-color', themeColors.background);
    root.style.setProperty('--text-color', themeColors.text);
    root.style.setProperty('--text-light-color', themeColors.textLight);
  }, [themeColors]);

  return (
    <SiteContext.Provider value={{ 
      companyInfo, 
      menuItems, 
      themeColors, 
      socialMediaLinks,
      lactaprodInfo,
      naturivisInfo,
      setCompanyInfo,
      setMenuItems,
      setThemeColors,
      setSocialMediaLinks,
      setLactaprodInfo,
      setNaturivisInfo
    }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useThemeColors = () => {
  const context = useContext(SiteContext);
  return context.themeColors;
};

export const useSocialMediaLinks = () => {
  const context = useContext(SiteContext);
  return { socialMediaLinks: context.socialMediaLinks };
};

export const useCompanyInfo = () => {
  const context = useContext(SiteContext);
  return context.companyInfo;
};

export const useMenuItems = () => {
  const context = useContext(SiteContext);
  return context.menuItems;
};

export const useLactaprodInfo = () => {
  const context = useContext(SiteContext);
  return context.lactaprodInfo;
};

export const useNaturivisInfo = () => {
  const context = useContext(SiteContext);
  return context.naturivisInfo;
};

export default SiteContext;
