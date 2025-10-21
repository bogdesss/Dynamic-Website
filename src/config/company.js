export const companyConfig = {
  // Company Information
  name: "Naturivis",
  tagline: "Inspirată de natură, creată în Transilvania",
  address: "Transilvania, România",
  phone: "+40 123 456 789",
  email: "naturivis@gmail.com",
  
  // Brand Colors
  colors: {
    primary: '#0e4652',
    secondary: '#34ab53',
    accent: '#34ab53',
    background: '#ffffff',
    text: '#000000',
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
      title: "Naturivis",
      subtitle: "Inspirată de natură, creată în Transilvania",
      description: "Produse agricole locale, proaspete și de calitate din Transilvania.",
      ctaText: "Contactează-ne",
      ctaLink: "/contact"
    },
    about: {
      title: "Despre Naturivis",
      description: "Naturivis oferă produse agricole locale, proaspete și de calitate din Transilvania."
    },
    contact: {
      title: "Contactează-ne",
      description: "Contactează-ne pentru mai multe informații despre produsele noastre."
    }
  }
};
