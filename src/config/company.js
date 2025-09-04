export const companyConfig = {
  // Company Information
  name: "Brandgenix SRL",
  tagline: "Digital Solutions for Your Success",
  address: "Satu Mare, str. Wolfenbuttel, nr. 24-26, jud. Satu Mare",
  phone: "+40 123 456 789",
  email: "contact@brandgenix.ro",
  
  // Brand Colors
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    accent: '#28a745',
    background: '#ffffff',
    text: '#333333',
    textLight: '#666666'
  },
  
  // Navigation Menu
  menuItems: [
    { name: 'Acasa', path: '/', status: 'active' },
    { name: 'Prezentare Proiect', path: '/about', status: 'active' },
    { name: 'Activitati Propuse', path: '/activities', status: 'coming-soon' },
    { name: 'Rezultate Ale Cercetarii', path: '/results', status: 'coming-soon' },
    { name: 'Contact', path: '/contact', status: 'active' }
  ],
  
  // Social Media Links
  socialMediaLinks: [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' }
  ],
  
  // Content Sections
  content: {
    hero: {
      title: "Brandgenix SRL",
      subtitle: "Digital Solutions for Your Success",
      description: "We offer a wide range of digital services to ensure your digital success.",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    },
    about: {
      title: "Prezentare Proiect",
      description: "Brandgenix SRL oferă o gamă variată de servicii digitale pentru a vă asigura succesul digital."
    },
    contact: {
      title: "Contact Us",
      description: "Get in touch with us for more information about our services."
    }
  }
};
