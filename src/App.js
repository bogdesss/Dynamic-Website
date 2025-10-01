import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/i18n';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProjectPage from './pages/ProjectPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produse" element={<ProductsPage />} />
          <Route path="/proiect" element={<ProjectPage />} />
          <Route path="/parteneri" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
