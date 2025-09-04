# Dynamic Website Template

A modern, customizable React website template that can be easily adapted for any company or organization. Built with React, Tailwind CSS, and a dynamic configuration system.

## 🚀 Features

- **Fully Customizable** - Easy company branding and content management
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with Tailwind CSS
- **Dynamic Theming** - CSS custom properties for real-time color changes
- **Contact Modal** - Quick contact form without page navigation
- **Coming Soon Pages** - Automatic handling of missing pages
- **Template Ready** - Perfect for creating multiple company websites

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management for configuration
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── HeroSection.js  # Homepage hero with modal
│   ├── AboutSection.js # About page content
│   ├── ContactForm.js  # Full contact page
│   ├── ContactModal.js # Quick contact modal
│   ├── ComingSoon.js   # Coming soon page
│   └── SocialMediaLinks.js # Footer social links
├── config/
│   └── company.js      # Company configuration
├── context/
│   └── SiteContext.js  # React context for state
└── App.js             # Main app component
```

## ⚙️ Configuration

All company-specific data is managed in `src/config/company.js`:

```javascript
export const companyConfig = {
  // Company Information
  name: "Your Company Name",
  address: "Your Address",
  
  // Brand Colors
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    accent: '#28a745'
  },
  
  // Navigation Menu
  menuItems: [
    { name: 'Home', path: '/', status: 'active' },
    { name: 'About', path: '/about', status: 'active' },
    { name: 'Services', path: '/services', status: 'coming-soon' }
  ],
  
  // Content
  content: {
    hero: {
      title: "Your Company",
      subtitle: "Your Tagline",
      ctaText: "Contact Us"
    }
  }
};
```

## 🎨 Customization

### Colors
Update the `colors` object in `company.js`:
```javascript
colors: {
  primary: '#your-brand-color',
  secondary: '#your-secondary-color',
  accent: '#your-accent-color'
}
```

### Content
Modify the `content` object for all text content:
```javascript
content: {
  hero: {
    title: "New Company Name",
    subtitle: "New Tagline"
  }
}
```

### Navigation
Add/remove menu items in the `menuItems` array:
```javascript
menuItems: [
  { name: 'New Page', path: '/new-page', status: 'coming-soon' }
]
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dynamic-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Customize for your company**
   - Edit `src/config/company.js`
   - Update colors, content, and navigation
   - Add your company information

## 📦 Build for Production

```bash
npm run build
```

## 🌟 Key Features Explained

### Dynamic Theming
- CSS custom properties automatically update when colors change
- Real-time color switching without page reload
- Dark mode support built-in

### Contact System
- **Modal Contact** - Quick contact from homepage
- **Full Contact Page** - Complete contact form via navigation
- **Form Validation** - Client-side validation with error messages

### Coming Soon Pages
- Automatic handling of missing pages
- Professional "Coming Soon" design
- Easy to convert to real pages later

### Template System
- One codebase for multiple companies
- Centralized configuration
- Easy to maintain and update

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the repository.