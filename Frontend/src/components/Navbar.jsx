// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const scrollToProductSection = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('product-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#product-section';
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <span className="brand-icon">🛠️</span>
        <span className="navbar-logo">BuyFixSell</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><a href="#product-section" onClick={scrollToProductSection}>Used Laptops</a></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
