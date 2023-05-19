import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/src/assets/logo.png" alt="Logo" className="h-16 w-20 mr-2" />
          <span className="font-bold text-lg">Toy Marketplace</span>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">123 Toy Street, City Name</p>
            <p className="text-gray-400">Email: info@toymarketplace.com</p>
            <p className="text-gray-400">Phone: 123-456-7890</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/toymarketplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://www.twitter.com/toymarketplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://www.instagram.com/toymarketplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-gray-400 hover:text-white"></i>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Toy Marketplace. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
