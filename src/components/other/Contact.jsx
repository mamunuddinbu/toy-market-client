import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">If you have any questions or inquiries, feel free to reach out to us using the contact information below:</p>
      <div className="flex items-center mb-4">
        <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
        <p>123 Toy Street, City Name</p>
      </div>
      <div className="flex items-center mb-4">
        <i className="fas fa-envelope text-gray-500 mr-2"></i>
        <p>info@toymarketplace.com</p>
      </div>
      <div className="flex items-center mb-4">
        <i className="fas fa-phone-alt text-gray-500 mr-2"></i>
        <p>123-456-7890</p>
      </div>
      <p>We are available Monday to Friday, 9am to 5pm.</p>
    </div>
  );
};

export default Contact;
