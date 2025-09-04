import React, { useState } from 'react';
import { useThemeColors, useCompanyInfo } from '../context/SiteContext';

const ContactForm = () => {
  const { primary } = useThemeColors();
  const companyInfo = useCompanyInfo();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formValues.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formValues.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+$/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formValues.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      });

      setSuccessMessage('Message sent successfully!');
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-8">{companyInfo.content.contact.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {companyInfo.content.contact.description}
        </p>
        {successMessage && <p className="text-green-500 mb-6">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:border-blue-500"
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:border-blue-500"
            />
            {errors.message && <p className="text-red-600">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
