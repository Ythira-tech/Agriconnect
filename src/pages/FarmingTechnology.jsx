// src/pages/FarmingTechnology.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./PageTemplate.css";

const FarmingTechnology = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Smart Farming Technology</h1>
        <p>Modern tools and digital solutions for enhanced agricultural productivity</p>
      </div>

      <div className="page-content">
        <div className="content-grid">
          <div className="main-content">
            <h2>Revolutionizing African Agriculture with Technology</h2>
            
            <div className="tech-categories">
              <div className="tech-category">
                <h3>📱 Mobile Applications</h3>
                <p><strong>Farm Management Apps:</strong> Track planting, harvesting, and expenses</p>
                <p><strong>Weather Forecast Tools:</strong> Real-time weather updates for better planning</p>
                <p><strong>Market Price Trackers:</strong> Stay updated on crop prices across markets</p>
              </div>

              <div className="tech-category">
                <h3>📊 Data Analytics</h3>
                <p><strong>Yield Prediction:</strong> AI-powered crop yield forecasts</p>
                <p><strong>Soil Analysis:</strong> Digital soil testing and recommendations</p>
                <p><strong>Pest Detection:</strong> Image recognition for early pest identification</p>
              </div>

              <div className="tech-category">
                <h3>💧 Smart Irrigation</h3>
                <p><strong>Automated Systems:</strong> Water crops based on soil moisture levels</p>
                <p><strong>Solar-Powered Pumps:</strong> Sustainable water pumping solutions</p>
                <p><strong>Mobile Control:</strong> Manage irrigation remotely via smartphone</p>
              </div>

              <div className="tech-category">
                <h3>🛰️ Remote Monitoring</h3>
                <p><strong>Drone Technology:</strong> Aerial monitoring of crop health</p>
                <p><strong>Satellite Imaging:</strong> Large-scale farm monitoring</p>
                <p><strong>Sensor Networks:</strong> Real-time field condition monitoring</p>
              </div>
            </div>

            <div className="case-study">
              <h3>Case Study: Nigerian Rice Farmer</h3>
              <p>
                "Using mobile apps for market prices and weather forecasts helped me 
                increase my profits by 35%. I now plant at optimal times and sell when 
                prices are highest in nearby markets."
                <br />
                <strong>- Amina Bello, Rice Farmer, Nigeria</strong>
              </p>
            </div>
          </div>

          <div className="sidebar">
            <div className="resource-card">
              <h4>Getting Started with Tech</h4>
              <ul>
                <li>Start with basic smartphone apps</li>
                <li>Attend digital literacy workshops</li>
                <li>Connect with tech-savvy farmers</li>
                <li>Gradually adopt advanced tools</li>
              </ul>
            </div>

            <div className="resource-card">
              <h4>Free Tools Available</h4>
              <ul>
                <li>Weather prediction apps</li>
                <li>Market price alerts</li>
                <li>Basic farm management software</li>
                <li>Educational mobile platforms</li>
              </ul>
            </div>

            <Link to="/signup" className="cta-sidebar">
              Access Our Technology Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingTechnology;