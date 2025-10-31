// src/components/FutureSection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FutureSection.css";

const FutureSection = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = (page) => {
    navigate(`/${page}`);
  };

  const handleJoinUs = () => {
    navigate("/signup");
  };

  return (
    <section className="future-section">
      <div className="future-content">
        <h2>Building Africa's Agricultural Future</h2>
        <p>
          Agriculture is more than just farming—it's the foundation of life,
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
          {showMore ? "Show Less" : "Learn More About Our Mission"}
        </button>

        {showMore && (
          <div className="expanded-info">
            <div className="info-text">
              <h3>Our Commitment to African Agriculture</h3>
              <p>
                We're dedicated to transforming Africa's agricultural landscape through 
                technology, education, and community empowerment. Our platform connects 
                traditional wisdom with modern innovation to create sustainable farming solutions.
              </p>

              <div className="pillars">
                <div className="pillar">
                  <span>🌱</span>
                  <h4>Sustainable Growth</h4>
                  <p>Promoting climate-resilient farming and soil conservation practices.</p>
                  <button 
                    className="pillar-link"
                    onClick={() => handleLearnMore("sustainable-farming")}
                  >
                    Learn about sustainable practices →
                  </button>
                </div>
                <div className="pillar">
                  <span>💡</span>
                  <h4>Smart Technology</h4>
                  <p>Leveraging AI, data analytics, and mobile tools for better decision-making.</p>
                  <button 
                    className="pillar-link"
                    onClick={() => handleLearnMore("farming-technology")}
                  >
                    Explore farming tech →
                  </button>
                </div>
                <div className="pillar">
                  <span>🤝</span>
                  <h4>Farmer Community</h4>
                  <p>Building networks for knowledge sharing and collective growth.</p>
                  <button 
                    className="pillar-link"
                    onClick={() => handleLearnMore("community")}
                  >
                    Join our community →
                  </button>
                </div>
              </div>

              <p className="impact-stat">
                🌍 <strong>60% of Africa's population</strong> depends on agriculture. 
                We're here to ensure they thrive with modern tools and shared knowledge.
              </p>

              <div className="cta-actions">
                <button className="cta-btn primary" onClick={handleJoinUs}>
                  Start Your Journey
                </button>
                <button 
                  className="cta-btn secondary"
                  onClick={() => handleLearnMore("about")}
                >
                  Our Story & Vision
                </button>
              </div>
            </div>

            <div className="info-image">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="African Farmers Innovation"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FutureSection;