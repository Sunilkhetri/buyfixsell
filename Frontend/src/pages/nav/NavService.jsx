// src/pages/NavService.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavService.css'; // Renamed CSS import

const detailedServices = [
    {
        icon: '💻',
        title: 'Expert Laptop & PC Repair',
        details: [
            'Motherboard Chip-Level Repair',
            'Screen & Keyboard Replacement',
            'Software Troubleshooting & OS Installation',
            'Overheating Solutions & Fan Replacement',
            'Virus Removal & Performance Tuning'
        ],
        description: 'Our certified technicians specialize in complex hardware repairs, often saving you the cost of a full replacement. We diagnose and fix issues down to the component level.',
    },
    {
        icon: '🛡️',
        title: 'CCTV Installation & Security Solutions',
        details: [
            'Home & Commercial CCTV Setup (Hikvision, CP Plus)',
            'Remote Viewing Configuration',
            'NVR/DVR Installation and Maintenance',
            'Full Security Audits and Consulting'
        ],
        description: 'Secure your assets with professional surveillance systems. We handle everything from consultation and wiring to final configuration and training.',
    },
    {
        icon: '🔄',
        title: 'Used Laptops & Computer Sales',
        details: [
            'Certified Refurbished Laptops (Dell, HP, Lenovo)',
            'Custom Built Desktops for Gaming/Work',
            'Component Sales (RAM, SSD, Graphics Cards)',
            'Trade-in and Exchange Program'
        ],
        description: 'Get top-tier performance without the new-product price tag. Every refurbished unit is rigorously tested, certified, and comes with a warranty.',
    },
    {
        icon: '💾',
        title: 'Data Recovery & Backup Services',
        details: [
            'Hard Drive and SSD Data Recovery',
            'Cloud and Local Backup Solutions',
            'RAID Configuration and Repair',
            'Secure Data Wiping Services'
        ],
        description: 'Lost files are stressful, but not always lost forever. We utilize advanced tools for safe and ethical data retrieval from failed storage devices.',
    },
];

const ServiceBlock = ({ icon, title, description, details }) => (
    <div className="service-block">
        <div className="service-icon-header">
            <span className="service-page-icon">{icon}</span>
            <h3>{title}</h3>
        </div>
        <div className="service-block-content">
            <p className="service-summary">{description}</p>
            <ul className="service-details-list">
                {details.map((detail, index) => <li key={index}>✓ {detail}</li>)}
            </ul>
        </div>
    </div>
);

export default function NavService() {
  return (
    <div className="services-page-container">
      <header className="services-hero">
        <div className="hero-content">
          <h1>Complete Technical Solutions for Home & Business</h1>
          <p>From chip-level motherboard repair to comprehensive CCTV installation, we cover all your tech needs.</p>
        </div>
      </header>

      <section className="services-main-grid">
        {detailedServices.map((service, index) => (
          <ServiceBlock key={index} {...service} />
        ))}
      </section>
      
      <section className="cta-banner">
        <h2>Ready to book a service?</h2>
        <p>Get a free quote for your repair or inquire about our custom IT solutions today.</p>
        <Link to="/contact" className="cta-button">Get Started Now</Link>
      </section>
    </div>
  );
}