import React from "react";
import "./SmartTools.css";

const SmartTools = () => {
  const tools = [
    {
      title: "📊 Fertilizer Calculator",
      description: "Enter your land size and crop type to get precise fertilizer recommendations — no more guesswork!",
      action: "Try Calculator",
    },
    {
      title: "🗓️ Planting & Harvest Calendar",
      description: "Find the best planting dates based on rainfall patterns and soil conditions for maximum yield.",
      action: "Plan My Season",
    },
    {
      title: "💧 Irrigation Estimator",
      description: "Get water requirement estimates based on your field size and soil type to save time and resources.",
      action: "Check Water Needs",
    },
    {
      title: "📈 Yield & Profit Predictor",
      description: "Estimate your harvest output and expected profit. Make smart financial plans before you plant.",
      action: "Predict My Yield",
    },
  ];

  return (
    <section className="smart-tools">
      <div className="tools-header">
        <h2>🌱 Smart Tools for Farmers</h2>
        <p>
          Practical tools designed to help you calculate, plan, and make better
          farming decisions — right at your fingertips.
        </p>
      </div>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
            <button>{tool.action}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartTools;
