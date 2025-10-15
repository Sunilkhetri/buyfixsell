import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* === MAIN FOOTER GRID === */}
      <div className="footer-main">
        {/* Brand Info */}
        <div className="footer-col">
          <h2 className="brand">BuyFixSell</h2>
          <p className="tagline">
            Your trusted tech partner for laptop repairs, CCTV setups, and certified used devices.
          </p>
          <p className="address">
            SR No. 48/9B/2, Sundar Nagar, Nr. Swami Samarth Temple, Mangdewadi, Katraj, Pune - 411046
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/services">Services</a></li>
            {/* Scroll to ProductsSection on the current page */}
            <li><a href="#product-section">Used Laptops</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="contact-info">
            <p>📞 <a href="tel:+919970103894">+91 99701 03894</a></p>
            <p>💬 <a href="https://wa.me/919970103894" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></p>
            <p>✉️ <a href="mailto:buyfixsell@gmail.com">buyfixsell@gmail.com</a></p>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <p className="hours">
            ⏰ Open 8 AM - 11 PM <br />
            🗓 Monday - Sunday
          </p>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom">
        <p>© 2025 BuyFixSell. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
