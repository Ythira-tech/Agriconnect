import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreCrops.css";

const ExploreCrops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const navigate = useNavigate();

  // Enhanced crop data with detailed information
  const crops = [
    {
      name: "Maize",
      image: "https://i.pinimg.com/736x/b7/14/19/b7141990c83dc747cbcebbc18ea55ae0.jpg",
      info: "Growth period: 3-4 months | Climate: Warm | Soil: Well-drained",
      details: {
        growthPeriod: "3-4 months",
        climate: "Warm (20-30°C)",
        soilType: "Well-drained loamy soil",
        waterRequirements: "Moderate (500-800mm per season)",
        plantingSeason: "Rainy season",
        harvestTime: "When kernels are hard and glossy",
        commonPests: "Stem borers, armyworms, weevils",
        diseases: "Maize streak virus, leaf blight, rust",
        fertilizer: "NPK 20:10:10, organic manure",
        yield: "3-6 tons per hectare",
        spacing: "75cm between rows, 25cm between plants"
      }
    },
    {
      name: "Beans",
      image: "https://i.pinimg.com/736x/20/37/64/203764c95212e98a32cdd205b9ef9413.jpg",
      info: "Growth period: 2-3 months | Climate: Moderate | Soil: Fertile",
      details: {
        growthPeriod: "2-3 months",
        climate: "Moderate (15-25°C)",
        soilType: "Fertile, well-drained soil",
        waterRequirements: "Regular watering (400-600mm)",
        plantingSeason: "Early rainy season",
        harvestTime: "When pods are firm and crisp",
        commonPests: "Aphids, bean flies, thrips",
        diseases: "Anthracnose, rust, root rot",
        fertilizer: "Phosphorus-rich fertilizer",
        yield: "1-2 tons per hectare",
        spacing: "45cm between rows, 10cm between plants"
      }
    },
    {
      name: "Tomatoes",
      image: "https://i.pinimg.com/1200x/1b/68/e6/1b68e67e68f729cd06180e53cb89814c.jpg",
      info: "Growth period: 3-4 months | Climate: Warm | Soil: Sandy loam",
      details: {
        growthPeriod: "3-4 months",
        climate: "Warm (18-27°C)",
        soilType: "Sandy loam with good drainage",
        waterRequirements: "Regular, consistent watering",
        plantingSeason: "Dry season with irrigation",
        harvestTime: "When fruits are firm and fully colored",
        commonPests: "Whiteflies, aphids, tomato hornworms",
        diseases: "Blight, wilt, leaf spot",
        fertilizer: "Balanced NPK, calcium-rich",
        yield: "20-50 tons per hectare",
        spacing: "60cm between rows, 45cm between plants"
      }
    },
    {
      name: "Rice",
      image: "https://i.pinimg.com/736x/b9/6a/22/b96a226bd8763d9c8ea70956ad47510e.jpg",
      info: "Growth period: 4-6 months | Climate: Wet | Soil: Clayey",
      details: {
        growthPeriod: "4-6 months",
        climate: "Wet, humid (20-35°C)",
        soilType: "Clayey soil that holds water",
        waterRequirements: "High (1000-2000mm per season)",
        plantingSeason: "Rainy season",
        harvestTime: "When 80-85% of grains are mature",
        commonPests: "Stem borers, leafhoppers, rice bugs",
        diseases: "Blast, bacterial blight, sheath blight",
        fertilizer: "Nitrogen-rich (urea)",
        yield: "4-8 tons per hectare",
        spacing: "20x20cm for transplanted rice"
      }
    },
    {
      name: "Cassava",
      image: "https://i.pinimg.com/736x/72/0e/3b/720e3b78e25219a765813ff75b3b9a28.jpg",
      info: "Growth period: 8-12 months | Climate: Tropical | Soil: Sandy loam",
      details: {
        growthPeriod: "8-12 months",
        climate: "Tropical (25-29°C)",
        soilType: "Sandy loam, well-drained",
        waterRequirements: "Moderate (1000-1500mm annually)",
        plantingSeason: "Beginning of rainy season",
        harvestTime: "When leaves yellow and fall",
        commonPests: "Mealybugs, green spider mites",
        diseases: "Cassava mosaic disease, brown streak",
        fertilizer: "Low nitrogen, high potassium",
        yield: "10-40 tons per hectare",
        spacing: "1m between rows, 1m between plants"
      }
    },
    {
      name: "Sorghum",
      image: "https://i.pinimg.com/1200x/c1/0f/ab/c10fab6d23d9a4efe752ffe5054ff911.jpg",
      info: "Growth period: 3-4 months | Climate: Semi-arid | Soil: Loamy",
      details: {
        growthPeriod: "3-4 months",
        climate: "Semi-arid (25-35°C)",
        soilType: "Loamy, well-drained soil",
        waterRequirements: "Low to moderate (400-600mm)",
        plantingSeason: "With onset of rains",
        harvestTime: "When grains are hard and moisture <20%",
        commonPests: "Stem borers, shoot flies, head bugs",
        diseases: "Grain mold, anthracnose, leaf blight",
        fertilizer: "Moderate nitrogen, phosphorus",
        yield: "2-5 tons per hectare",
        spacing: "75cm between rows, 15cm between plants"
      }
    },
  ];

  // Filter crops based on search
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLearnMore = (crop) => {
    setSelectedCrop(crop);
  };

  const handleCloseDetails = () => {
    setSelectedCrop(null);
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="explore-crops-container">
      {/* Hero Section */}
      <div className="crops-hero-section">
        <h1 className="crops-main-title">Explore Crops</h1>
        <p className="crops-subtitle">
          Discover comprehensive information about various crops, including growth requirements, 
          best practices, and expert tips to maximize your yield.
        </p>
      </div>

      {/* Search bar */}
      <div className="crops-search-container">
        <input
          type="text"
          placeholder="Search crops by name, soil type, or climate..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="crops-search-input"
        />
      </div>

      {/* Crop Grid */}
      <div className="crops-grid-layout">
        {filteredCrops.map((crop, index) => (
          <div key={index} className="crop-card-item">
            <div className="crop-image-container">
              <img src={crop.image} alt={crop.name} className="crop-image" />
            </div>
            <div className="crop-info-content">
              <h3 className="crop-name">{crop.name}</h3>
              <p className="crop-basic-info">{crop.info}</p>
              <button 
                className="learn-more-btn"
                onClick={() => handleLearnMore(crop)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Crop Details Modal */}
      {selectedCrop && (
        <div className="crop-details-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseDetails}>×</button>
            <h2 className="modal-title">{selectedCrop.name}</h2>
            <div className="modal-body">
              <div className="modal-image-section">
                <img src={selectedCrop.image} alt={selectedCrop.name} />
              </div>
              <div className="modal-details-section">
                <div className="detail-group">
                  <h4>Growth Information</h4>
                  <div className="detail-item">
                    <span className="detail-label">Growth Period:</span>
                    <span className="detail-value">{selectedCrop.details.growthPeriod}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Planting Season:</span>
                    <span className="detail-value">{selectedCrop.details.plantingSeason}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Harvest Time:</span>
                    <span className="detail-value">{selectedCrop.details.harvestTime}</span>
                  </div>
                </div>

                <div className="detail-group">
                  <h4>Environmental Requirements</h4>
                  <div className="detail-item">
                    <span className="detail-label">Climate:</span>
                    <span className="detail-value">{selectedCrop.details.climate}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Soil Type:</span>
                    <span className="detail-value">{selectedCrop.details.soilType}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Water Needs:</span>
                    <span className="detail-value">{selectedCrop.details.waterRequirements}</span>
                  </div>
                </div>

                <div className="detail-group">
                  <h4>Management Practices</h4>
                  <div className="detail-item">
                    <span className="detail-label">Spacing:</span>
                    <span className="detail-value">{selectedCrop.details.spacing}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Fertilizer:</span>
                    <span className="detail-value">{selectedCrop.details.fertilizer}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Expected Yield:</span>
                    <span className="detail-value">{selectedCrop.details.yield}</span>
                  </div>
                </div>

                <div className="detail-group">
                  <h4>Pest & Disease Management</h4>
                  <div className="detail-item">
                    <span className="detail-label">Common Pests:</span>
                    <span className="detail-value">{selectedCrop.details.commonPests}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Common Diseases:</span>
                    <span className="detail-value">{selectedCrop.details.diseases}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div className="crops-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Want to know more?</h2>
          <p className="cta-description">
            Join our community of farmers to access exclusive content, 
            personalized advice, and connect with agricultural experts.
          </p>
          <button className="cta-signup-btn" onClick={handleSignupRedirect}>
            Sign Up for Detailed Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCrops;