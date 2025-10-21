import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
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
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Contactează-ne
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Pentru mai multe informații despre proiectul nostru de cercetare.
          </p>
          
          {successMessage && (
            <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded mb-4">
              {successMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="modal-name" className="block text-gray-700 dark:text-white mb-2">
                Nume
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="modal-email" className="block text-gray-700 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="modal-message" className="block text-gray-700 dark:text-white mb-2">
                Mesaj
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Anulează
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
