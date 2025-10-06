// src/pages/Marketplace.jsx
import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Marketplace.css";

const Marketplace = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="marketplace">
      {/* Hero Section */}
      <div className="market-hero">
        <h1>AgriConnect Marketplace</h1>
        <p>Explore quality crops, inputs, and tools — all in one place.</p>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Call-to-Action */}
      <div className="market-cta">
        <h2>Want to list your products on AgriConnect?</h2>
        <button className="cta-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Marketplace;
