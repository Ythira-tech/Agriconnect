// src/pages/AboutAgriConnect.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./PageTemplate.css";

const AboutAgriconnect = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>About AgriConnect</h1>
        <p>Our mission to transform African agriculture through innovation and community</p>
      </div>

      <div className="page-content">
        <div className="content-grid">
          <div className="main-content">
            <h2>Our Story: Empowering Africa's Farmers</h2>
            
            <div className="mission-section">
              <h3>🎯 Our Mission</h3>
              <p>
                To democratize agricultural knowledge and technology, making modern 
                farming practices accessible to every African farmer regardless of 
                scale or location. We believe that empowered farmers are the foundation 
                of food security and economic growth across the continent.
              </p>
            </div>

            <div className="vision-section">
              <h3>🔭 Our Vision</h3>
              <p>
                A future where African farmers are globally competitive, environmentally 
                sustainable, and economically prosperous. We envision connected farming 
                communities leveraging technology to achieve food sovereignty while 
                preserving our natural resources for generations to come.
              </p>
            </div>

            <div className="values-section">
              <h3>💫 Our Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <h4>Innovation</h4>
                  <p>Embracing technology while respecting traditional wisdom</p>
                </div>
                <div className="value-item">
                  <h4>Community</h4>
                  <p>Strength through collaboration and shared knowledge</p>
                </div>
                <div className="value-item">
                  <h4>Sustainability</h4>
                  <p>Farming practices that protect our environment long-term</p>
                </div>
                <div className="value-item">
                  <h4>Accessibility</h4>
                  <p>Making resources available to farmers at all levels</p>
                </div>
              </div>
            </div>

            <div className="impact-section">
              <h3>📊 Our Impact</h3>
              <div className="impact-stats">
                <div className="stat">
                  <h4>10,000+</h4>
                  <p>Farmers Reached</p>
                </div>
                <div className="stat">
                  <h4>45%</h4>
                  <p>Average Yield Increase</p>
                </div>
                <div className="stat">
                  <h4>60%</h4>
                  <p>Water Usage Reduction</p>
                </div>
                <div className="stat">
                  <h4>25+</h4>
                  <p>African Countries Served</p>
                </div>
              </div>
            </div>

            <div className="team-section">
              <h3>👥 Our Team</h3>
              <p>
                AgriConnect was founded by agricultural experts, technology innovators, 
                and most importantly, farmers who understand the real challenges facing 
                African agriculture. Our team combines decades of field experience with 
                cutting-edge technological expertise.
              </p>
            </div>
          </div>

          <div className="sidebar">
            <div className="resource-card">
              <h4>Our Partners</h4>
              <ul>
                <li>Ministry of Agriculture (Multiple Countries)</li>
                <li>International Research Institutes</li>
                <li>Local Farmer Cooperatives</li>
                <li>Technology Development Partners</li>
              </ul>
            </div>

            <div className="resource-card">
              <h4>Future Goals</h4>
              <ul>
                <li>Reach 1 million farmers by 2027</li>
                <li>Expand to all 54 African countries</li>
                <li>Develop AI-powered farming assistants</li>
                <li>Create regional innovation hubs</li>
              </ul>
            </div>

            <Link to="/signup" className="cta-sidebar">
              Join Our Movement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgriconnect;