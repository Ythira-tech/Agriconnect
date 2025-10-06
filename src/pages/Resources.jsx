// src/pages/Resources.jsx
import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources-page">
      {/* Hero */}
      <section className="resources-hero">
        <h1>Agri Resources Hub</h1>
        <p>
          Explore guides, infographics, and tools to help you grow smarter and
          improve farm productivity.
        </p>
      </section>

      {/* Guides */}
      <section className="resources-section">
        <h2>📘 Educational Guides</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Best Practices for Irrigation</h3>
            <a href="#">Download PDF</a>
          </div>
          <div className="resource-card">
            <h3>Soil Preparation 101</h3>
            <a href="#">Download PDF</a>
          </div>
          <div className="resource-card">
            <h3>Pest & Disease Management</h3>
            <a href="#">Download PDF</a>
          </div>
        </div>
      </section>

      {/* Infographics */}
      <section className="resources-section">
        <h2>📊 Infographics & Visuals</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <img
              src="https://via.placeholder.com/200x120"
              alt="Crop cycle"
            />
            <p>Maize Growth Cycle</p>
          </div>
          <div className="resource-card">
            <img
              src="https://via.placeholder.com/200x120"
              alt="Soil chart"
            />
            <p>Soil pH Chart</p>
          </div>
          <div className="resource-card">
            <img
              src="https://via.placeholder.com/200x120"
              alt="Fertilizer guide"
            />
            <p>Fertilizer Application Guide</p>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="resources-section">
        <h2>🎥 Demo Videos</h2>
        <div className="resources-grid">
          <div className="resource-card video-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/DLzxrzFCyOs"
              title="How to set up drip irrigation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>How to set up drip irrigation</p>
          </div>
          <div className="resource-card video-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Greenhouse basics"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Greenhouse Basics</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="resources-section">
        <h2>❓ FAQs</h2>
        <ul className="faq-list">
          <li>🌽 When is the best time to plant maize?</li>
          <li>🧪 How can I test my soil?</li>
          <li>🌱 What’s the easiest crop for beginners?</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>💡 Got a Resource to Share?</h2>
        <p>
          Help farmers grow smarter by contributing your tips, guides, or
          research.
        </p>
        <button className="cta-button">Contribute a Resource</button>
      </section>
    </div>
  );
};

export default Resources;
