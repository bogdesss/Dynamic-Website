export const naturivisConfig = {
  // Company Information
  name: "Naturivis",
  tagline: "Inspirată de natură, creată în Transilvania",
  address: "",
  phone: "",
  email: "",
  
  // Brand Colors (Nature-inspired theme)
  colors: {
    primary: '#0e4652',      // Deep Teal
    secondary: '#34ab53',    // Nature Green
    accent: '#000000',       // Black
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
      title: "Naturivis",
      subtitle: "Inspirată de natură, creată în Transilvania",
      description: "Descoperiți produsele noastre naturale, create cu pasiune în inima Transilvaniei.",
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
