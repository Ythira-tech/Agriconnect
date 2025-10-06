import React from "react";
import { FaSeedling, FaTractor, FaTint, FaBug } from "react-icons/fa";
import "./InfoHub.css";

const InfoHub = () => {
  const steps = [
    {
      icon: <FaSeedling />,
      title: "Soil Preparation",
      description: "Get access to certified seeds that guarantee strong germination rates and healthier plants."
    },
    {
      icon: <FaTractor />,
      title: "Balanced Fertilizers",
      description: "Nourish your soil and crops with the right blend of organic and mineral inputs."
    },
    {
      icon: <FaTint />,
      title: "Modern Tools",
      description: "Save time and labor with efficient, affordable tools made for small-scale farmers."
    },
    {
      icon: <FaBug />,
      title: "Sustainable Practices",
      description: "Adopt eco-friendly inputs that protect your soil and ensure long-term productivity."
    }
  ];

  return (
    <section className="farming-hub">
      <div className="hub-container">
        {/* LEFT SIDE */}
        <div className="hub-intro">
          <h2>ABOUT US</h2>
          <p>
            The Farming Info Hub is your trusted knowledge center designed to guide farmers 
    with practical insights and modern techniques. From soil preparation to pest 
    and disease control, it brings together the latest research, best practices, 
    and step-by-step guidance to support smarter farming decisions. Whether you are 
    a smallholder farmer or managing larger fields, this hub helps you maximize yields, 
    reduce risks, and adopt sustainable methods that protect both your farm and the 
    environment. Think of it as your companion in navigating the challenges of modern 
    agriculture with confidence and clarity.
          </p>
          <button className="hub-btn">Explore More</button>
        </div>

        {/* RIGHT SIDE (existing timeline) */}
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{step.icon}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoHub;
