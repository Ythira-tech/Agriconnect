import React from "react";
import "./QualityInputs.css";
import { FaSeedling, FaLeaf, FaTools, FaGlobe } from "react-icons/fa";

function QualityInputs() {
  return (
    <section className="quality-inputs">
      <h2>Quality Inputs for Better Harvests</h2>
      <p className="section-intro">
        The right seeds, fertilizers, and tools can transform your farm.
        Here’s what every farmer should know:
      </p>

      <div className="inputs-grid">
        <div className="input-row">
          <FaSeedling className="input-icon" />
          <div className="input-text">
            <h3>High-Quality Seeds</h3>
            <p>Boost your yields with certified seeds designed for resilience and nutrition.</p>
          </div>
        </div>

        <div className="input-row reverse">
          <div className="input-text">
            <h3>Balanced Fertilizers</h3>
            <p>Nourish your soil and crops with the right blend of organic and mineral inputs.</p>
          </div>
          <FaLeaf className="input-icon" />
        </div>

        <div className="input-row">
          <FaTools className="input-icon" />
          <div className="input-text">
            <h3>Modern Tools</h3>
            <p>Save time and labor with efficient, affordable tools made for small-scale farmers.</p>
          </div>
        </div>

        <div className="input-row reverse">
          <div className="input-text">
            <h3>Sustainable Practices</h3>
            <p>Adopt eco-friendly inputs that protect your soil and ensure long-term productivity.</p>
          </div>
          <FaGlobe className="input-icon" />
        </div>
      </div>
    </section>
  );
}

export default QualityInputs;
