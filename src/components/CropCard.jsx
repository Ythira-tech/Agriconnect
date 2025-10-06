import React from "react";
import "./ExploreCrops.css";

const CropCard = ({ image, name, info }) => {
  return (
    <div className="crop-card">
      <img src={image} alt={name} className="crop-img" />
      <h3>{name}</h3>
      <p>{info}</p>
      <button className="learn-btn">Learn More</button>
    </div>
  );
};

export default CropCard;
