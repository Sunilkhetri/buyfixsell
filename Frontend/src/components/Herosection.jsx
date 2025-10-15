import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const services = [
    "Expert Laptop & PC Repair",
    "CCTV Installation Setup & Upgrades",
    "Used Laptops & Desktops",
    "Motherboard & RAM Fixes",
    "Home Service & Pickup",
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left">
          <h1 className="hero-title">
            Buy, Fix, Install.
            <br />
            India’s #1 <span className="highlight">Trusted Tech Hub</span>
          </h1>

          <ul className="hero-services">
            {services.map((s, i) => (
              <li key={i}>
                <span className="check-icon">✓</span> {s}
              </li>
            ))}
          </ul>

          <button
            className="hero-btn"
            onClick={() =>
              window.open("https://wa.me/9970103894", "_blank", "noopener noreferrer")
            }
          >
            Contact Us on WhatsApp
          </button>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="contact-card">
            <div className="glow-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" className="phone-svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.21-2.21c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.74 21 3 13.26 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.21 2.21z" />
              </svg>
            </div>
            <div className="contact-text">
              <h3>CALL NOW!</h3>
              <p className="phone-number">9970103894</p>
            </div>
            <div className="whatsapp-inline">
              <svg viewBox="0 0 32 32" fill="currentColor" className="whatsapp-inline-icon">
                <path d="M16 2.667a13.333 13.333 0 0 0-11.34 20.35L3.334 29.333l6.52-1.983A13.3 13.3 0 1 0 16 2.667zm0 24a10.62 10.62 0 0 1-5.66-1.64l-.4-.24-3.88 1.18 1.2-3.74-.25-.38A10.67 10.67 0 1 1 16 26.667zM22.04 19.1c-.33-.17-1.94-.95-2.24-1.06s-.52-.16-.74.17c-.22.33-.85 1.06-1.04 1.28s-.38.25-.7.08a8.5 8.5 0 0 1-2.5-1.53 9.4 9.4 0 0 1-1.75-2.18c-.18-.31-.02-.48.14-.65.15-.15.33-.38.5-.56.17-.18.22-.31.33-.52.11-.21.05-.4-.03-.56s-.74-1.78-1.02-2.43c-.27-.65-.55-.56-.74-.57H10.2c-.22 0-.57.08-.87.4s-1.15 1.13-1.15 2.75 1.18 3.19 1.35 3.42c.17.22 2.33 3.55 5.64 4.97a19.2 19.2 0 0 0 1.89.7c.8.25 1.53.21 2.1.13.64-.1 1.94-.8 2.22-1.57s.27-1.43.18-1.57-.29-.22-.61-.39z" />
              </svg>
              <a
                href="https://wa.me/9970103894"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-inline-text"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating contact icons on every page */}
      <div className="floating-icons">
        <a href="tel:9970103894" className="float-btn phone-btn" title="Call Now">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.21-2.21c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.74 21 3 13.26 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.21 2.21z" />
          </svg>
        </a>

        <a
          href="https://wa.me/9970103894"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn whatsapp-btn"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2.667a13.333 13.333 0 0 0-11.34 20.35L3.334 29.333l6.52-1.983A13.3 13.3 0 1 0 16 2.667zm0 24a10.62 10.62 0 0 1-5.66-1.64l-.4-.24-3.88 1.18 1.2-3.74-.25-.38A10.67 10.67 0 1 1 16 26.667zM22.04 19.1c-.33-.17-1.94-.95-2.24-1.06s-.52-.16-.74.17c-.22.33-.85 1.06-1.04 1.28s-.38.25-.7.08a8.5 8.5 0 0 1-2.5-1.53 9.4 9.4 0 0 1-1.75-2.18c-.18-.31-.02-.48.14-.65.15-.15.33-.38.5-.56.17-.18.22-.31.33-.52.11-.21.05-.4-.03-.56s-.74-1.78-1.02-2.43c-.27-.65-.55-.56-.74-.57H10.2c-.22 0-.57.08-.87.4s-1.15 1.13-1.15 2.75 1.18 3.19 1.35 3.42c.17.22 2.33 3.55 5.64 4.97a19.2 19.2 0 0 0 1.89.7c.8.25 1.53.21 2.1.13.64-.1 1.94-.8 2.22-1.57s.27-1.43.18-1.57-.29-.22-.61-.39z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
