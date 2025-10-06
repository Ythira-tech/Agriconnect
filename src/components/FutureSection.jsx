// src/components/FutureSection.jsx
import React, { useState } from "react";
import "./FutureSection.css";

const FutureSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="future-section">
      <div className="future-content">
        <h2>Shaping Africa’s Future</h2>
        <p>
          Agriculture is more than just farming—it’s the foundation of life,
          community, and progress. By embracing smarter, sustainable practices
          today, we ensure healthier harvests, empowered farmers, and stronger
          communities tomorrow. Every seed planted carries the promise of growth,
          innovation, and resilience. Together, we can cultivate not only the land
          but also a future where food security, environmental balance, and
          prosperity go hand in hand.
        </p>

        <button
          className="learn-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>

        {showMore && (
          <div className="expanded-info">
            <div className="info-text">
              <h3>Our Vision</h3>
              <p>
                We believe Africa’s growth starts with empowering farmers through
                knowledge, resources, and innovation.
              </p>

              <div className="pillars">
                <div className="pillar">
                  <span>🌱</span>
                  <h4>Sustainability</h4>
                  <p>Promoting climate-smart farming and protecting natural resources.</p>
                </div>
                <div className="pillar">
                  <span>💡</span>
                  <h4>Innovation</h4>
                  <p>Integrating modern tools and technologies for better yields.</p>
                </div>
                <div className="pillar">
                  <span>🤝</span>
                  <h4>Community</h4>
                  <p>Connecting farmers, students, and experts to share knowledge.</p>
                </div>
              </div>

              <p className="impact-stat">
                🌍 Did you know? Over 60% of Africa’s population relies on
                agriculture for their livelihood.
              </p>

              <button className="cta-btn">Join Us</button>
            </div>

            <div className="info-image">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="African Farmers"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FutureSection;
