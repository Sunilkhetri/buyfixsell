// src/components/ServicesSection.jsx
import React from 'react';
import './ServicesSection.css'; // Import the corresponding CSS

// Data structure for the services
const servicesData = [
  {
    icon: '💻', // Using an emoji as a simple placeholder icon
    title: 'Laptop & PC Repair',
    description: 'Motherboard, RAM & Accessory Fixes',
    className: 'laptop-icon' // For specific icon styling if needed
  },
  {
    icon: '⚙️', 
    title: 'On-Site Setup',
    description: 'Windows, Software & Network Config',
    className: 'onsite-icon'
  },
  {
    icon: '📹', 
    title: 'CCTV Installation:',
    description: 'Setup, Maintenance & Router/WIFI',
    className: 'cctv-icon'
  },
  {
    icon: '🚀', 
    title: 'Upgrades & Updates',
    description: 'Boost Performance & Latest OS',
    className: 'upgrade-icon'
  },
];

const ServiceCard = ({ icon, title, description, className }) => (
  <div className={`service-card ${className}`}>
    <div className="service-icon-wrapper">
      {/* In a real app, this would be an SVG or a custom component */}
      <span className="service-icon">{icon}</span>
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="services-section-container">
      <h2 className="services-section-heading">Our Services</h2>
      <div className="services-cards-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;