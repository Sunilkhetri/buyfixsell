// src/components/Navbar.jsx
import React, { useState } from 'react'; // Import useState
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // New state for menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Function to toggle the menu state
  };

  const scrollToProductSection = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('product-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#product-section';
    }
    setIsOpen(false); // Close menu after click, regardless of route
  };

  // Function to close the menu after a Link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <span className="brand-icon">🛠️</span>
        <span className="navbar-logo">BuyFixSell</span>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {/* You can use an icon font or SVG here, but text works too */}
        {isOpen ? '✕' : '☰'} 
      </div>

      {/* Conditional class based on isOpen state */}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
        <li><a href="#product-section" onClick={scrollToProductSection}>Used Laptops</a></li>
        <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;