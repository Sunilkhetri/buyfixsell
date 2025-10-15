// src/components/ReviewsFAQSection.jsx
import React, { useState, useEffect } from 'react';
import './ReviewsFAQSection.css';

// --- Data (unchanged) ---
const reviewsData = [
    { name: "Ajit londhe", rating: 5, text: "Quick affordable service! My laptop like new! Highly recommended for Motherboard repairs." },
    { name: "Pavan Sharma", rating: 4, text: "Installed my CCTV perfectly. Very reliable. The on-site setup was seamless." },
    { name: "Anil Sharma", rating: 5, text: "Got a refurbished desktop. Looks and works flawlessly. Great deal!" },
    { name: "Priya K.", rating: 5, text: "Fast RAM upgrade service. Boosted my performance exactly as promised. Five stars!" },
    { name: "Kiran R.", rating: 4, text: "The network configuration service was very thorough. My office network is stable now." },
    { name: "Suresh P.", rating: 5, text: "Repaired my old laptop's motherboard. They saved my data and my budget. Excellent work." },
    { name: "Zoya H.", rating: 5, text: "Great prices on used laptops. The certified condition feels brand new." },
    { name: "Vikram D.", rating: 4, text: "CCTV maintenance package is worth it. Professional team and quick response." },
    { name: "Meena L.", rating: 5, text: "They bought my old PC at a fair price. Very transparent process. Will use again." },
    { name: "Rahul S.", rating: 5, text: "My desktop repair was done quickly, and the charges were very reasonable." },
];

const faqsData = [
    { question: "Do you offer home pickup & delivery?", answer: "Yes, we offer convenient home pickup, diagnosis, and delivery across our service area in Pune. Just book a repair online." },
    { question: "How long do repairs usually take?", answer: "Standard repairs typically take 1-3 business days, depending on the complexity and part availability. Critical fixes may be prioritized." },
    { question: "What types of laptops do you buy & sell?", answer: "We buy, sell, and refurbish all major brands (Dell, HP, Lenovo, etc.) focusing on mid-to-high range business and consumer models." },
    { question: "Is the refurbished equipment certified?", answer: "Absolutely. All used equipment undergoes rigorous 30+ point testing and certification, backed by a minimum 6-month warranty." },
    { question: "What are your on-site service charges?", answer: "On-site charges vary based on the service (e.g., CCTV installation, network setup). We provide a detailed quote before starting any work." },
    { question: "Can I track my repair status online?", answer: "Yes, once your device is picked up, you receive a tracking ID to monitor its diagnosis, repair, and delivery status on our portal." },
];

// Star Rating Helper
const StarRating = ({ rating }) => <span className="star-rating">{'⭐'.repeat(rating)}</span>;

// Review Card without image
const ReviewCard = ({ name, rating, text, isCenter }) => (
    <div className={`review-card ${isCenter ? 'center-highlight' : ''}`}>
        <p className="review-text">"{text}"</p>
        <p className="review-author">{name} <StarRating rating={rating} /></p>
    </div>
);

// FAQ Item
const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="faq-index">{index + 1}.</span>
                <p className="faq-question-text">{question}</p>
                <span className="faq-arrow">{isOpen ? '−' : '+'}</span>
            </div>
            <div className="faq-answer-wrapper">
                {/* Conditional rendering inside wrapper to control the transition */}
                <div className="faq-answer-content">{answer}</div>
            </div>
        </div>
    );
};

export default function ReviewsFAQSection() {
    const reviewsPerView = 5; // Display 5 cards, with the 3rd (index 2) highlighted
    const totalReviews = reviewsData.length;
    const [activeIndex, setActiveIndex] = useState(0); 
    
    // Calculate the index of the first card to be displayed in the current view
    // Since we only have 10 reviews and display 5, the maximum starting index is 5.
    const maxStartIndex = totalReviews - 1; 

    // Carousel logic
    const handleNext = () => {
        // Move forward one, loop back to 0 if at the end
        setActiveIndex(prev => (prev >= maxStartIndex ? 0 : prev + 1));
    };
    
    const handlePrev = () => {
        // Move back one, loop to maxStartIndex if at the beginning
        setActiveIndex(prev => (prev <= 0 ? maxStartIndex : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

    // Prepare slides: Only display valid reviews up to totalReviews
    const slides = [];
    for (let i = 0; i < reviewsPerView; i++) {
        // Calculate the actual index in the reviewsData array
        const reviewIndex = (activeIndex + i) % totalReviews;
        const review = reviewsData[reviewIndex];
        
        // Only render if the review data exists
        if (review) {
            // Note: isCenter logic remains i === 2 for the 3rd card
            slides.push(<ReviewCard key={reviewIndex} {...review} isCenter={i === 2} />);
        }
    }

    // Calculate the dynamic transform needed to center the cards in the carousel
    // This value is adjusted in CSS for display (5 cards per view)
    const translateXValue = -(activeIndex * (100 / reviewsPerView)); // Correct transform logic 

    return (
        <section className="reviews-faq-container">
            <div className="reviews-faq-wrapper">

                {/* --- Testimonials Section --- */}
                <h2 className="section-heading">Trusted by Pune</h2>
                <div className="testimonials-section">
                    <div className="reviews-carousel-window">
                        <div 
                            className="reviews-carousel-track"
                            style={{ 
                                // Apply transform for carousel movement
                                transform: `translateX(0)`, // CSS handles the layout, we just shift the index for data
                                // The JSX logic above correctly changes which 5 cards are rendered based on activeIndex
                            }}
                        >
                            {slides}
                        </div>
                    </div>
                    <div className="carousel-controls-center">
                        <button onClick={handlePrev} className="control-button prev-button">← Previous</button>
                        <button onClick={handleNext} className="control-button next-button">Next →</button>
                    </div>
                </div>

                {/* --- FAQ Section --- */}
                <h2 className="section-heading faq-title">Questions? Find your Answers.</h2>
                <div className="faq-content-grid">

                    {/* Left Column - Why Choose Us without CTA */}
                    <div className="faq-left-promo-box">
                        <h3 className="promo-title">Why Choose BuyFixSell?</h3>
                        <p className="promo-subtitle">Your local experts for reliable, affordable tech services.</p>
                        <ul className="promo-features-list">
                            <li><span className="check-icon">✓</span> Certified & Experienced Technicians</li>
                            <li><span className="check-icon">✓</span> 6-Month Minimum Warranty on Repairs</li>
                            <li><span className="check-icon">✓</span> Free Diagnostics & No Hidden Fees</li>
                            <li><span className="check-icon">✓</span> Quick Turnaround (1-3 Days)</li>
                            <li><span className="check-icon">✓</span> Free Home Pickup & Delivery in Pune</li>
                        </ul>
                        {/* Example CTA button, currently not used in the original component, but good to keep the class */}
                        {/* <button className="promo-cta-button">Book A Repair Now</button> */}
                    </div>

                    {/* Right Column - FAQ List */}
                    <div className="faq-right-list">
                        <div className="faq-list">
                            {faqsData.map((item, index) => <FAQItem key={index} {...item} index={index} />)}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}