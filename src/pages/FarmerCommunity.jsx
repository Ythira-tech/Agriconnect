// src/pages/FarmerCommunity.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./PageTemplate.css";

const FarmerCommunity = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Farmer Community Network</h1>
        <p>Connect, share, and grow together with farmers across Africa</p>
      </div>

      <div className="page-content">
        <div className="content-grid">
          <div className="main-content">
            <h2>Building Stronger Farming Communities</h2>
            
            <div className="community-features">
              <div className="feature">
                <h3>👥 Knowledge Sharing</h3>
                <p>Share experiences, ask questions, and learn from fellow farmers</p>
                <ul>
                  <li>Regional farming forums</li>
                  <li>Crop-specific discussion groups</li>
                  <li>Seasonal planting tips exchange</li>
                  <li>Problem-solving communities</li>
                </ul>
              </div>

              <div className="feature">
                <h3>🎓 Expert Access</h3>
                <p>Connect with agricultural experts and extension officers</p>
                <ul>
                  <li>Live Q&A sessions with agronomists</li>
                  <li>Monthly webinars and workshops</li>
                  <li>One-on-one consultation opportunities</li>
                  <li>Research findings and updates</li>
                </ul>
              </div>

              <div className="feature">
                <h3>🤝 Collaborative Projects</h3>
                <p>Work together on community farming initiatives</p>
                <ul>
                  <li>Group purchasing for better prices</li>
                  <li>Cooperative farming ventures</li>
                  <li>Community seed banks</li>
                  <li>Shared equipment programs</li>
                </ul>
              </div>

              <div className="feature">
                <h3>📈 Success Stories</h3>
                <p>Learn from real farmers achieving remarkable results</p>
                <ul>
                  <li>Farmer spotlights and interviews</li>
                  <li>Case studies from different regions</li>
                  <li>Innovation showcases</li>
                  <li>Best practice sharing</li>
                </ul>
              </div>
            </div>

            <div className="testimonial">
              <h3>Community Impact Story</h3>
              <p>
                "Through the AgriConnect community, I connected with other maize farmers 
                in my region. We now share equipment, bulk-buy inputs at lower prices, 
                and have formed a cooperative that markets our produce together. Our 
                collective income has increased by 50% in one year."
                <br />
                <strong>- David Omondi, Maize Farmer Cooperative, Kenya</strong>
              </p>
            </div>
          </div>

          <div className="sidebar">
            <div className="resource-card">
              <h4>Community Benefits</h4>
              <ul>
                <li>Shared knowledge and experience</li>
                <li>Collective bargaining power</li>
                <li>Emotional support network</li>
                <li>Innovation through collaboration</li>
              </ul>
            </div>

            <div className="resource-card">
              <h4>How to Get Involved</h4>
              <ol>
                <li>Join regional discussion groups</li>
                <li>Participate in monthly events</li>
                <li>Share your experiences</li>
                <li>Collaborate on projects</li>
              </ol>
            </div>

            <Link to="/signup" className="cta-sidebar">
              Join Our Growing Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerCommunity;