import React from "react";
import "./CropLibrary.css";

function CropLibrary() {
  return (
<section className="mini-crop-library">
  <h2 className="library-title">Mini Crop Library</h2>

  <div className="library-grid">
    {/* Maize */}
    <div className="library-item">
      <img src="/assets/Maize.jpeg" alt="Maize" className="library-photo" />
      <div className="library-content">
        <h3>Maize</h3>
        <p>The staple food crop across Africa, known for resilience and versatility.</p>
        <button className="learn-btn">Learn More</button>
      </div>
    </div>

    {/* Fruits */}
    <div className="library-item">
      <img src="/assets/Fruits.jpeg" alt="Fruits" className="library-photo" />
      <div className="library-content">
        <h3>Fruits</h3>
        <p>Rich in vitamins and nutrients, fruits add diversity to farming income.</p>
        <button className="learn-btn">Learn More</button>
      </div>
    </div>

    {/* Plantation Crops */}
    <div className="library-item">
      <img src="/assets/Plantation.jpeg" alt="Plantation Crops" className="library-photo" />
      <div className="library-content">
        <h3>Plantation Crops</h3>
        <p>Cash crops like tea and coffee sustain economies and create jobs.</p>
        <button className="learn-btn">Learn More</button>
      </div>
    </div>

    {/* Vegetables */}
    <div className="library-item">
      <img src="https://i.pinimg.com/1200x/97/77/c5/9777c5c1bbc6b209f543fdbd17fa7a70.jpg" alt="Vegetables" className="library-photo" />
      <div className="library-content">
        <h3>Vegetables</h3>
        <p>Essential crops for nutrition and daily meals, grown across all regions.</p>
        <button className="learn-btn">Learn More</button>
      </div>
    </div>
  </div>
</section>

  );
}

export default CropLibrary;
