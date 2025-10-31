import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Marketplace.css";

const Marketplace = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const navigate = useNavigate();

  // Enhanced demo products with realistic data
  const products = [
    {
      id: 1,
      name: "Fresh Maize Grains",
      category: "crops",
      price: 45,
      unit: "per kg",
      image: "https://i.pinimg.com/736x/b7/14/19/b7141990c83dc747cbcebbc18ea55ae0.jpg",
      location: "Nairobi, Kenya",
      rating: 4.5,
      reviews: 128,
      description: "Premium quality maize grains, sun-dried and properly stored. Perfect for consumption or planting.",
      seller: "GreenFields Farm",
      delivery: "Available",
      stock: 5000,
      minOrder: 10
    },
    {
      id: 2,
      name: "Organic Tomatoes",
      category: "vegetables",
      price: 80,
      unit: "per kg",
      image: "https://i.pinimg.com/1200x/1b/68/e6/1b68e67e68f729cd06180e53cb89814c.jpg",
      location: "Arusha, Tanzania",
      rating: 4.8,
      reviews: 89,
      description: "Fresh organic tomatoes, pesticide-free. Harvested daily for maximum freshness.",
      seller: "Tanzania Organics",
      delivery: "Available",
      stock: 1200,
      minOrder: 5
    },
    {
      id: 3,
      name: "Quality Beans",
      category: "crops",
      price: 120,
      unit: "per kg",
      image: "https://i.pinimg.com/736x/20/37/64/203764c95212e98a32cdd205b9ef9413.jpg",
      location: "Kampala, Uganda",
      rating: 4.3,
      reviews: 67,
      description: "High-protein beans, carefully sorted and cleaned. Great nutritional value.",
      seller: "Uganda Beans Co.",
      delivery: "Available",
      stock: 3000,
      minOrder: 10
    },
    {
      id: 4,
      name: "Fresh Cassava",
      category: "crops",
      price: 25,
      unit: "per kg",
      image: "https://i.pinimg.com/736x/72/0e/3b/720e3b78e25219a765813ff75b3b9a28.jpg",
      location: "Lagos, Nigeria",
      rating: 4.6,
      reviews: 156,
      description: "Fresh cassava roots, perfect for consumption or processing. High starch content.",
      seller: "Cassava Kings",
      delivery: "Available",
      stock: 8000,
      minOrder: 20
    },
    {
      id: 5,
      name: "Premium Rice",
      category: "crops",
      price: 95,
      unit: "per kg",
      image: "https://i.pinimg.com/736x/b9/6a/22/b96a226bd8763d9c8ea70956ad47510e.jpg",
      location: "Cairo, Egypt",
      rating: 4.7,
      reviews: 203,
      description: "Long grain premium rice, polished and ready for cooking. Excellent quality.",
      seller: "Nile Valley Farms",
      delivery: "Available",
      stock: 2500,
      minOrder: 5
    },
    {
      id: 6,
      name: "Sorghum Grains",
      category: "crops",
      price: 55,
      unit: "per kg",
      image: "https://i.pinimg.com/1200x/c1/0f/ab/c10fab6d23d9a4efe752ffe5054ff911.jpg",
      location: "Addis Ababa, Ethiopia",
      rating: 4.4,
      reviews: 92,
      description: "Quality sorghum grains, ideal for flour production or animal feed.",
      seller: "Highland Grains",
      delivery: "Available",
      stock: 4000,
      minOrder: 15
    },
    {
      id: 7,
      name: "Organic Fertilizer",
      category: "inputs",
      price: 1500,
      unit: "per 50kg bag",
      image: "https://i.pinimg.com/736x/8a/4b/3d/8a4b3d8b4d4e4e4e4e4e4e4e4e4e4e4e.jpg",
      location: "Nairobi, Kenya",
      rating: 4.6,
      reviews: 178,
      description: "100% organic compost fertilizer. Improves soil structure and fertility.",
      seller: "EcoFarm Solutions",
      delivery: "Available",
      stock: 200,
      minOrder: 1
    },
    {
      id: 8,
      name: "Drip Irrigation Kit",
      category: "tools",
      price: 4500,
      unit: "per set",
      image: "https://i.pinimg.com/736x/9a/8b/95/9a8b954e4e4e4e4e4e4e4e4e4e4e4e4e.jpg",
      location: "Johannesburg, South Africa",
      rating: 4.9,
      reviews: 234,
      description: "Complete drip irrigation system for 1/4 acre. Water-efficient and easy to install.",
      seller: "AgriTech Tools",
      delivery: "Available",
      stock: 50,
      minOrder: 1
    }
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "crops", label: "Crops" },
    { value: "vegetables", label: "Vegetables" },
    { value: "inputs", label: "Farm Inputs" },
    { value: "tools", label: "Tools & Equipment" }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const ProductCard = ({ product }) => (
    <div className="market-product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-badge">{product.category}</div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-meta">
          <div className="seller-info">
            <span className="seller">By {product.seller}</span>
            <span className="location">📍 {product.location}</span>
          </div>
          
          <div className="rating">
            ⭐ {product.rating} ({product.reviews} reviews)
          </div>
        </div>
        
        <div className="product-details">
          <div className="stock-info">
            <span>Stock: {product.stock} {product.unit.split(' ')[2] || 'units'}</span>
            <span>Min Order: {product.minOrder}</span>
          </div>
          <div className="delivery-badge">
            {product.delivery}
          </div>
        </div>
        
        <div className="product-footer">
          <div className="price-section">
            <span className="price">KSh {product.price}</span>
            <span className="unit">/{product.unit}</span>
          </div>
          <button className="buy-now-btn">Contact Seller</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="marketplace-container">
      {/* Hero Section */}
      <div className="marketplace-hero">
        <div className="hero-content">
          <h1 className="hero-title">AgriConnect Marketplace</h1>
          <p className="hero-subtitle">
            Connect directly with farmers and suppliers. Buy and sell quality crops, 
            farm inputs, and equipment with trusted partners across Africa.
          </p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search for crops, fertilizers, tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="marketplace-filters">
        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>Price Range: KSh {priceRange[0]} - KSh {priceRange[1]}</label>
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="range-input"
            />
          </div>
        </div>
        
        <div className="results-count">
          {filteredProducts.length} products found
        </div>
      </div>

      {/* Products Grid */}
      <div className="marketplace-products">
        <h2 className="section-title">Featured Products</h2>
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search criteria or browse different categories.</p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="marketplace-stats">
        <div className="stat-item">
          <h3>5000+</h3>
          <p>Active Farmers</p>
        </div>
        <div className="stat-item">
          <h3>2000+</h3>
          <p>Products Listed</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="marketplace-cta">
        <div className="cta-content">
          <h2>Ready to List Your Products?</h2>
          <p>
            Join thousands of farmers and suppliers who are growing their business with AgriConnect. 
            Reach more customers, get fair prices, and build your reputation in the agricultural community.
          </p>
          <button className="cta-button" onClick={handleGetStarted}>
            Start Selling Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;