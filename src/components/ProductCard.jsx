// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <p className="location">📍 {product.location}</p>
      <button className="view-btn">View Details</button>
    </div>
  );
};

export default ProductCard;
