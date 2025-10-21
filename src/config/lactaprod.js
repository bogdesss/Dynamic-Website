export const lactaprodConfig = {
  // Company Information
  name: "Naturivis",
  tagline: "Inspirată de natură, creată în Transilvania",
  address: "Transilvania, România",
  phone: "+40 123 456 789",
  email: "naturivis@gmail.com",
  
  // Brand Colors (Naturivis theme)
  colors: {
    primary: '#0e4652',      // Dark teal
    secondary: '#34ab53',    // Green
    accent: '#34ab53',       // Green
    background: '#ffffff',
    text: '#000000',
    textLight: '#666666'
  },
  
  // Navigation Menu
  menuItems: [
    { name: 'Acasă', path: '/', status: 'active' },
    { name: 'Proiect', path: '/project', status: 'active' },
    { name: 'Parteneri', path: '/partners', status: 'active' },
    { name: 'Buget', path: '/budget', status: 'active' },
    { name: 'Contact', path: '/contact', status: 'active' }
  ],
  
  // Social Media Links
  socialMediaLinks: [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:contact@lactaprod.ro', icon: 'email' }
  ],
  
  // Project Information
  project: {
    title: "LactaProd Research Project",
    description: "Dezvoltarea de tehnologii inovatoare în industria lactatelor",
    totalBudget: "114.515 EURO",
    totalBudgetRON: "557.836,91 RON",
    duration: "12 months",
    startDate: "2021",
    exchangeRate: "4.8713 RON/EUR"
  },
  
  // Beneficiary Information
  beneficiary: {
    name: "LactaProd SRL",
    role: "Solicitant Principal",
    budget: "64.515 EURO",
    budgetRON: "314.271,91 RON",
    activities: [
      "Elaborare studii pregătitoare",
      "Management de proiect",
      "Închiriere echipamente",
      "Onorarii parteneri",
      "Elaborare software",
      "Inventariere resurse",
      "Diseminare rezultate"
    ]
  },
  
  // Partners Information
  partners: [
    {
      name: "SC MNA Prodcom Impex SRL",
      budget: "25.000 EURO",
      budgetRON: "121.782,50 RON",
      team: [
        "Coordonator: Munteanu Ioan",
        "Director Științific: Tuluca Elisaveta",
        "Asistent Director: Raicu Ilioara"
      ],
      activities: [
        "Onorarii echipă de cercetare",
        "Analize de laborator",
        "Consumabile de laborator"
      ]
    },
    {
      name: "NUTRACEUTICAL SRL",
      budget: "25.000 EURO", 
      budgetRON: "121.782,50 RON",
      team: [
        "Coordonator: Lazurca Dumitru",
        "Biolog: Lazurca Maria",
        "Asistent Director: Nagy Imre"
      ],
      activities: [
        "Onorarii echipă de cercetare",
        "Analize de laborator",
        "Consumabile de laborator"
      ]
    }
  ],
  
  // Budget Breakdown
  budget: {
    chapter1: {
      title: "Studii/Planuri",
      amount: "5.600 EURO",
      description: "Elaborarea de studii pregătitoare, studii de fezabilitate și planuri"
    },
    chapter2: {
      title: "Costuri de Funcționare",
      amount: "14.989 EURO",
      description: "Cheltuieli de transport, diurnă și onorarii personal"
    },
    chapter3: {
      title: "Costuri Directe",
      amount: "88.800 EURO",
      description: "Chirii echipamente, onorarii parteneri, alte cheltuieli"
    },
    chapter4: {
      title: "Diseminare Rezultate",
      amount: "5.126 EURO",
      description: "Evenimente, publicații, participare la evenimente"
    }
  },
  
  // Content Sections
  content: {
    hero: {
      title: "Naturivis",
      subtitle: "Inspirată de natură, creată în Transilvania",
      description: "Produse agricole locale, proaspete și de calitate din Transilvania.",
      ctaText: "Află Mai Multe",
      ctaLink: "/project"
    },
    project: {
      title: "Proiectul LactaProd",
      description: "Dezvoltarea de tehnologii inovatoare în industria lactatelor prin cercetare colaborativă cu parteneri specializați."
    },
    partners: {
      title: "Partenerii Noștri",
      description: "Colaborăm cu experți în domeniul cercetării și dezvoltării tehnologiilor alimentare."
    },
    budget: {
      title: "Bugetul Proiectului",
      description: "Transparență totală în gestionarea resurselor financiare ale proiectului."
    },
    contact: {
      title: "Contactează-ne",
      description: "Pentru mai multe informații despre proiectul nostru de cercetare."
    }
  }
};
