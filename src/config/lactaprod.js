export const lactaprodConfig = {
  // Company Information
  name: "Valea Olpretului Cooperativa Agricola",
  tagline: "Produse agricole proaspete și de calitate",
  address: "",
  phone: "",
  email: "",
  
  // Brand Colors (Dairy/Agricultural theme)
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
    { name: 'Proiect', path: '/project', status: 'active' },
    { name: 'Parteneri', path: '/partners', status: 'active' },
    { name: 'Buget', path: '/budget', status: 'active' },
    { name: 'Contact', path: '/contact', status: 'active' }
  ],
  
  // Social Media Links
  socialMediaLinks: [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Email', url: '#', icon: 'email' }
  ],
  
  // Project Information
  project: {
    title: "",
    description: "",
    totalBudget: "",
    totalBudgetRON: "",
    duration: "",
    startDate: "",
    exchangeRate: ""
  },
  
  // Beneficiary Information
  beneficiary: {
    name: "",
    role: "",
    budget: "",
    budgetRON: "",
    activities: []
  },
  
  // Partners Information
  partners: [],
  
  // Budget Breakdown
  budget: {
    chapter1: {
      title: "",
      amount: "",
      description: ""
    },
    chapter2: {
      title: "",
      amount: "",
      description: ""
    },
    chapter3: {
      title: "",
      amount: "",
      description: ""
    },
    chapter4: {
      title: "",
      amount: "",
      description: ""
    }
  },
  
  // Content Sections
  content: {
    hero: {
      title: "Valea Olpretului Cooperativa Agricola",
      subtitle: "Produse agricole proaspete și de calitate",
      description: "Descoperiți produsele noastre agricole proaspete, cultivate cu grijă și pasiune.",
      ctaText: "Vezi Produsele",
      ctaLink: "/products"
    },
    project: {
      title: "",
      description: ""
    },
    partners: {
      title: "",
      description: ""
    },
    budget: {
      title: "",
      description: ""
    },
    contact: {
      title: "",
      description: ""
    }
  }
};
