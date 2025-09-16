export const valeOlpretuluiConfig = {
  // Company Information
  name: "Valea Olpretului Cooperativa Agricola",
  tagline: "Produse agricole proaspete și de calitate",
  address: "",
  phone: "",
  email: "",
  
  // Brand Colors (Agricultural theme)
  colors: {
    primary: '#2E7D32',      // Forest Green
    secondary: '#8BC34A',    // Light Green
    accent: '#FF9800',       // Orange
    background: '#ffffff',
    text: '#333333',
    textLight: '#666666'
  },
  
  // Navigation Menu
  menuItems: [
    { name: 'Acasă', path: '/', status: 'active' },
    { name: 'Produse', path: '/products', status: 'active' },
    { name: 'Coș', path: '/cart', status: 'active' },
    { name: 'Despre Noi', path: '/about', status: 'active' },
    { name: 'GDPR', path: '/gdpr', status: 'active' },
    { name: 'Contact', path: '/contact', status: 'active' }
  ],
  
  // Social Media Links
  socialMediaLinks: [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'Email', url: '#', icon: 'email' }
  ],
  
  // Content Sections
  content: {
    hero: {
      title: "Valea Olpretului Cooperativa Agricola",
      subtitle: "Produse agricole proaspete și de calitate",
      description: "Descoperiți produsele noastre agricole proaspete, cultivate cu grijă și pasiune în Valea Olpretului.",
      ctaText: "Vezi Produsele",
      ctaLink: "/products"
    },
    about: {
      title: "",
      description: ""
    },
    contact: {
      title: "",
      description: ""
    }
  }
};
