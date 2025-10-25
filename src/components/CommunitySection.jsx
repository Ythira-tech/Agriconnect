import React from "react";
import "./CommunitySection.css";
import { useNavigate } from "react-router-dom";

const CommunitySection = () => {
  const navigate = useNavigate();

  const handleEnterChat = () => {
    navigate("/community-chat");
  };

  return (
    <section className="connect-wrapper">
      <div className="connect-content">
        <div className="connect-info">
          <div className="connect-header">
            <span className="connect-badge">Community</span>
            <h2 className="connect-title">Grow Together, Share Together</h2>
          </div>
          <p className="connect-description">
            Join thousands of farmers sharing real-time insights, crop strategies, 
            and market updates. Connect with agricultural experts and fellow farmers 
            to elevate your farming journey.
          </p>
          <div className="connect-features">
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Real-time farmer discussions</span>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Expert agricultural advice</span>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Market trends & pricing</span>
            </div>
          </div>
          <button className="connect-cta" onClick={handleEnterChat}>
            Join Community
            <span className="cta-arrow">→</span>
          </button>
        </div>
        <div className="connect-visual">
          <div className="visual-frame">
            <img
              src="https://i.pinimg.com/736x/d1/d6/fd/d1d6fde9b2b81c1ac28fe22135cf569f.jpg"
              alt="Farmers community discussion"
              className="visual-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;