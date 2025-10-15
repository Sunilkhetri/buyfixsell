// src/pages/About.jsx
import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page-container">
      
      {/* Hero Section */}
      <header className="about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>We are <span>BuyFixSell</span></h1>
            <p>Affordable, sustainable, and reliable tech solutions in Pune.</p>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-content-grid">
          <div className="mission-image">
            <img src="hero.jpg" alt="Our dedicated tech team" />
          </div>
          <div className="mission-text">
            <p>At BuyFixSell, we believe in extending the lifespan of electronic devices through expert repair, responsible refurbishment, and fair trade practices.</p>
            <p>Local, Pune-based, passionate, and committed to reducing electronic waste.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section values-section">
        <h2 className="section-title">Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Reliability</h3>
            <p>Every repair and refurbished item comes with a 6-month warranty.</p>
          </div>
          <div className="value-card">
            <h3>Affordability</h3>
            <p>Competitive prices to keep your tech running without breaking the bank.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Repair & reuse actively reduces electronic waste in our community.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
     
    </div>
  );
}
