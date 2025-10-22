import React from "react";
import "./CropPage.css";

function Fruits() {
  return (
    <div className="crop-page">
      <h1>Fruits</h1>
      <img src="/assets/Fruits.jpeg" alt="Fruits" className="crop-image" />
      <p>
        Fruits are rich in vitamins, minerals, and fiber. They promote health,
        boost immunity, and provide a reliable source of income for farmers.
      </p>

      <h3>Best Practices</h3>
      <ul>
        <li>🍋 Choose well-drained soils with good sunlight exposure.</li>
        <li>🌱 Apply organic manure to improve soil fertility.</li>
        <li>💧 Water regularly, especially during dry spells.</li>
        <li>✂️ Prune to maintain tree shape and enhance fruit quality.</li>
      </ul>

      <h3>Pest & Disease Management</h3>
      <p>
        Watch out for fruit flies, aphids, and fungal infections like anthracnose.
        Use traps, natural predators, and proper field hygiene to control pests.
      </p>

      <h3>Harvesting</h3>
      <p>
        Harvest fruits at maturity to ensure good flavor and market quality.
        Handle gently to avoid bruising, and store in cool, shaded areas.
      </p>
    </div>
  );
}

export default Fruits;
