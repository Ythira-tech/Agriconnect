// src/pages/SustainableFarming.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./PageTemplate.css";

const SustainableFarming = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Sustainable Farming Practices</h1>
        <p>Climate-resilient techniques for long-term agricultural success</p>
      </div>

      <div className="page-content">
        <div className="content-grid">
          <div className="main-content">
            <h2>Building a Sustainable Future for African Agriculture</h2>
            
            <div className="content-section">
              <h3>🌱 Soil Conservation Methods</h3>
              <ul>
                <li><strong>Cover Cropping:</strong> Planting cover crops to prevent soil erosion and improve fertility</li>
                <li><strong>Crop Rotation:</strong> Rotating crops to maintain soil health and reduce pests</li>
                <li><strong>Conservation Tillage:</strong> Minimal soil disturbance to preserve structure and moisture</li>
                <li><strong>Organic Matter Addition:</strong> Using compost and manure to enrich soil naturally</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>💧 Water Management Strategies</h3>
              <ul>
                <li><strong>Drip Irrigation:</strong> Precise water delivery to reduce waste by up to 60%</li>
                <li><strong>Rainwater Harvesting:</strong> Collecting and storing rainwater for dry periods</li>
                <li><strong>Mulching:</strong> Using organic materials to retain soil moisture</li>
                <li><strong>Drought-Resistant Crops:</strong> Planting varieties that thrive with less water</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>🌿 Organic Farming Techniques</h3>
              <ul>
                <li><strong>Natural Pest Control:</strong> Using companion planting and biological controls</li>
                <li><strong>Green Manure:</strong> Growing plants specifically for soil enrichment</li>
                <li><strong>Integrated Pest Management:</strong> Combining methods for sustainable pest control</li>
                <li><strong>Agroforestry:</strong> Integrating trees with crops for ecosystem benefits</li>
              </ul>
            </div>

            <div className="success-story">
              <h3>Success Story: Kenyan Farmer Transformation</h3>
              <p>
                "By implementing conservation agriculture and drip irrigation, 
                I increased my maize yield by 40% while reducing water usage by half. 
                The soil is healthier, and my farm is more resilient to climate changes."
                <br />
                <strong>- John Kamau, Smallholder Farmer, Kenya</strong>
              </p>
            </div>
          </div>

          <div className="sidebar">
            <div className="resource-card">
              <h4>Quick Start Guide</h4>
              <p>Begin your sustainable farming journey with these steps:</p>
              <ol>
                <li>Test your soil composition</li>
                <li>Start with one conservation practice</li>
                <li>Monitor and record results</li>
                <li>Expand techniques gradually</li>
              </ol>
            </div>

            <div className="resource-card">
              <h4>Recommended Tools</h4>
              <ul>
                <li>Soil testing kits</li>
                <li>Moisture sensors</li>
                <li>Compost bins</li>
                <li>Drip irrigation kits</li>
              </ul>
            </div>

            <Link to="/signup" className="cta-sidebar">
              Join AgriConnect for Personalized Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableFarming;