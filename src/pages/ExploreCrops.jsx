import React, { useState } from "react";
import "./ExploreCrops.css";

const ExploreCrops = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Crop data
  const crops = [
    {
      name: "Maize",
      image: "https://i.pinimg.com/736x/b7/14/19/b7141990c83dc747cbcebbc18ea55ae0.jpg",
      info: "Growth period: 3-4 months | Climate: Warm | Soil: Well-drained",
    },
    {
      name: "Beans",
      image: "https://i.pinimg.com/736x/20/37/64/203764c95212e98a32cdd205b9ef9413.jpg",
      info: "Growth period: 2-3 months | Climate: Moderate | Soil: Fertile",
    },
    {
      name: "Tomatoes",
      image: "https://i.pinimg.com/1200x/1b/68/e6/1b68e67e68f729cd06180e53cb89814c.jpg",
      info: "Growth period: 3-4 months | Climate: Warm | Soil: Sandy loam",
    },
    {
      name: "Rice",
      image: "https://i.pinimg.com/736x/b9/6a/22/b96a226bd8763d9c8ea70956ad47510e.jpg",
      info: "Growth period: 4-6 months | Climate: Wet | Soil: Clayey",
    },
    {
      name: "Cassava",
      image: "https://i.pinimg.com/736x/72/0e/3b/720e3b78e25219a765813ff75b3b9a28.jpg",
      info: "Growth period: 8-12 months | Climate: Tropical | Soil: Sandy loam",
    },
    {
      name: "Sorghum",
      image: "https://i.pinimg.com/1200x/c1/0f/ab/c10fab6d23d9a4efe752ffe5054ff911.jpg",
      info: "Growth period: 3-4 months | Climate: Semi-arid | Soil: Loamy",
    },
  ];

  // Filter crops based on search
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="explore-crops">
      {/* Hero Section */}
      <div className="hero">
        <h1>Explore Crops</h1>
        <p>
          Discover a wide variety of crops, their growth requirements, and best
          practices to maximize yield.
        </p>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search crops by name, soil, or climate..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Crop Grid */}
      <div className="crop-grid">
        {filteredCrops.map((crop, index) => (
          <div key={index} className="crop-card">
            <img src={crop.image} alt={crop.name} />
            <h3>{crop.name}</h3>
            <p>{crop.info}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>

      {/* Educational Resources */}
      <div className="resources">
        <h2>Educational Resources</h2>
        <ul>
          <li>
            <button href="#">Best practices for irrigation</button>
          </li>
          <li>
            <button href="#">Soil preparation tips</button>
          </li>
          <li>
            <button href="#">Pest & disease management</button>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h2>Want to contribute to our crop library?</h2>
        <p>Share your farming tips with AgriConnect!</p>
        <button className="cta-button">Contribute Now</button>
      </div>
    </div>
  );
};

export default ExploreCrops;
