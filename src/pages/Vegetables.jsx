import React from "react";
import "./CropPage.css";

function Vegetables() {
  return (
    <div className="crop-page">
      <h1>Vegetables</h1>
      <img
        src="https://i.pinimg.com/1200x/97/77/c5/9777c5c1bbc6b209f543fdbd17fa7a70.jpg"
        alt="Vegetables"
        className="crop-image"
      />
      <p>
        Vegetables are essential for daily nutrition and can be grown in a wide
        range of climates. They provide fast income returns for small-scale farmers.
      </p>

      <h3>Best Practices</h3>
      <ul>
        <li>🌱 Rotate crops to prevent soil nutrient depletion.</li>
        <li>☀️ Grow under adequate sunlight for strong growth.</li>
        <li>💧 Water early in the morning or late evening to reduce evaporation.</li>
        <li>🌾 Apply compost manure before planting for soil enrichment.</li>
      </ul>

      <h3>Pest & Disease Management</h3>
      <p>
        Regularly inspect for aphids, cutworms, and fungal diseases like blight.
        Use organic pesticides, remove infected plants, and maintain field hygiene.
      </p>

      <h3>Harvesting</h3>
      <p>
        Harvest at the right maturity stage to maintain freshness and flavor.
        Wash gently and sort before selling or storing.
      </p>
    </div>
  );
}

export default Vegetables;
