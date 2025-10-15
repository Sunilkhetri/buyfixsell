// src/components/ProductsSection.jsx
import React, { useState } from "react";
import "./ProductsSection.css";

// ✅ Laptops — 12 images from public/laptop folder
const LAPTOP_IMAGES = Array.from({ length: 12 }, (_, i) => `/laptop/lap${i + 1}.jpg`);

// ✅ Single images for Desktops, CCTV, Components from public folder
const DESKTOP_IMAGE = "/desktop/desktop.jpg";
const CCTV_IMAGE = "/cctv/cctv.jpg";
const COMPONENT_IMAGE = "/compo/compo.jpg";

// ✅ WhatsApp helper
const handleWhatsApp = (productName) => {
  const phone = "9970103894";
  const text = encodeURIComponent(`Hello, I'm interested in ${productName}. Can you share more details?`);
  window.open(`https://wa.me/91${phone}?text=${text}`, "_blank");
};

// ✅ Product generator
const generateProducts = (names, minPrice, maxPrice, images, multipleImages = false) =>
  names.map((name, i) => {
    const price = Math.floor(minPrice + (i * (maxPrice - minPrice)) / (names.length - 1));
    return {
      name,
      price: `₹${price.toLocaleString("en-IN")}`,
      image: multipleImages ? images[i % images.length] : images[0],
    };
  });

// ✅ Product categories with updated price ranges
const productCategories = {
  Laptops: {
    title: "Certified Used Laptops",
    items: generateProducts(
      [
        "Dell Latitude",
        "HP Pavilion",
        "Lenovo ThinkPad",
        "Dell Inspiron",
        "Dell XPS",
        "Dell Vostro",
        "Asus VivoBook",
        "Asus TUF",
        "Apple MacBook Air",
        "HP Envy",
        "Lenovo IdeaPad",
        "Apple MacBook Pro"
      ],
      8000,
      25000,
      LAPTOP_IMAGES,
      true
    ),
  },
  "PCs & Desktops": {
    title: "Refurbished PCs & Desktops",
    items: generateProducts(
      [
        "HP ProDesk PC",
        "Dell OptiPlex PC",
        "Lenovo ThinkCentre PC",
        "Acer Veriton PC",
        "Asus ExpertCenter PC",
        "MSI Creator PC",
        "Apple iMac Desktop",
        "Dell Precision Desktop",
        "HP Z Series Desktop",
        "Lenovo V530 Desktop",
        "Acer Predator Desktop",
        "Custom Tower Desktop"
      ],
      10000,
      20000,
      [DESKTOP_IMAGE]
    ),
  },
  CCTV: {
    title: "New CCTV Cameras & Kits",
    items: generateProducts(
      [
        "Hikvision Dome",
        "CP Plus Bullet",
        "Dahua IR",
        "Hikvision Turbo HD",
        "Godrej SmartCam",
        "TP-Link Tapo",
        "Qubo Outdoor",
        "Eufy SecurityCam",
        "Mi 360 Home",
        "Realme SmartCam",
        "Imou Ranger",
        "CP Plus Dome"
      ],
      3000,
      6000,
      [CCTV_IMAGE]
    ),
  },
  Components: {
    title: "New Components & Accessories",
    items: generateProducts(
      [
        "Logitech Keyboard",
        "Cosmic Byte Mouse",
        "Corsair RAM",
        "HyperX Headset",
        "Cooler Master Fan",
        "Zebronics Power Supply",
        "Redragon Gaming Mouse",
        "Logitech Webcam",
        "Razer Keyboard",
        "HyperX Microphone",
        "Dell Docking Station",
        "Asus Monitor"
      ],
      500,
      2500,
      [COMPONENT_IMAGE]
    ),
  },
  Electronics: {
    title: "More Electronics (Coming Soon)",
    items: null,
  },
};

// ✅ Tab Button
const TabButton = ({ isActive, label, onClick }) => (
  <button className={`tab-button ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </button>
);

// ✅ Product Card
const ProductCard = ({ name, price, image }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <div className="product-info-wrap">
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
      <button className="view-details-button" onClick={() => handleWhatsApp(name)}>
        💬 Chat on WhatsApp
      </button>
    </div>
  </div>
);

// ✅ Coming Soon Card
const ComingSoonCard = ({ title }) => (
  <div className="coming-soon-card">
    <div className="loader-ring"></div>
    <h3>{title}</h3>
    <p>We are currently stocking up our inventory. Check back soon for exciting new products!</p>
  </div>
);

// ✅ Main Component with id assigned
export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("Laptops");
  const { title, items } = productCategories[activeTab];
  const tabs = Object.keys(productCategories);

  return (
    <section className="products-section-container" id="product-section">
      <div className="products-content-wrapper">
        <h2 className="products-main-title">{title}</h2>

        <div className="tab-navigation">
          {tabs.map((tab) => (
            <TabButton key={tab} label={tab} isActive={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </div>

        {items ? (
          <div className="product-grid">
            {items.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        ) : (
          <div className="coming-soon-wrapper">
            <ComingSoonCard title={title} />
          </div>
        )}
      </div>
    </section>
  );
}
