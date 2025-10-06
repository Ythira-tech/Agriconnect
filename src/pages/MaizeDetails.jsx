import React from "react";
import "./MaizeDetails.css"; // import the CSS file

function MaizeDetails() {
  return (
    <div className="maize-container">
      <div className="maize-hero">
        <h1>🌽 Maize: Africa’s Staple Crop</h1>
        <p>
          Maize (corn) is the backbone of African food security. Beyond being a
          daily meal, it supports animal feed, industry, and rural livelihoods.
        </p>
      </div>

      <div className="maize-content">
        <div className="maize-text">
          <h2>Best Practices</h2>
          <ul>
            <li>🌱 Plant at the onset of rains for maximum yield.</li>
            <li>📏 Spacing: 75cm x 25cm between plants.</li>
            <li>🌾 Use certified hybrid seeds for better harvests.</li>
            <li>💧 Apply nitrogen fertilizer at knee-height stage.</li>
          </ul>

          <h2>Pest & Disease Management</h2>
          <p>
            Farmers should monitor crops for pests like <strong>Fall
            Armyworm</strong> and diseases like <strong>Maize Streak Virus</strong>.
            Use integrated pest management for long-term control.
          </p>

          <h2>Harvesting</h2>
          <p>
            Harvest when husks are dry and kernels are firm. Dry properly to
            avoid aflatoxin contamination and maintain grain quality.
          </p>
        </div>

        <div className="maize-image">
          <img
            src="https://i.pinimg.com/1200x/e5/05/ef/e505ef91503b5f4747f87b4bf4eb3ff5.jpg"
            alt="Maize field"
          />
        </div>
      </div>
    </div>
  );
}

export default MaizeDetails;
