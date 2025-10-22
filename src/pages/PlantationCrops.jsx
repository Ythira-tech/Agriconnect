import React from "react";
import "./CropPage.css";

function PlantationCrops() {
  return (
    <div className="crop-page">
      <h1>Plantation Crops</h1>
      <img src="/assets/Plantation.jpeg" alt="Plantation Crops" className="crop-image" />
      <p>
        Plantation crops such as coffee, tea, and sugarcane are vital cash crops
        that support rural economies and export industries.
      </p>

      <h3>Best Practices</h3>
      <ul>
        <li>🌤️ Choose highland areas with consistent rainfall.</li>
        <li>🌱 Maintain proper shade for crops like coffee.</li>
        <li>🌾 Mulch regularly to retain soil moisture.</li>
        <li>🧑‍🌾 Prune and weed to promote healthy growth.</li>
      </ul>

      <h3>Pest & Disease Management</h3>
      <p>
        Monitor for pests such as coffee berry borer and tea mosquito bug.
        Use biological controls and maintain field sanitation for prevention.
      </p>

      <h3>Harvesting</h3>
      <p>
        Harvest only mature produce — for example, ripe coffee cherries or
        fully developed tea leaves — and process promptly for quality retention.
      </p>
    </div>
  );
}

export default PlantationCrops;
