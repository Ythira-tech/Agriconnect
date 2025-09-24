import React from "react";
import "./WhyFarmers.css";

const WhyFarmers = () => {
  return (
    <section className="why-farmers">
      <h2 className="why-title">Why Farmers Love AgriConnect 🌾</h2>
      
      <div className="why-container">
        <div className="why-card">
          <img src="/assets/Market.jpeg" alt="Market Access" />
          <h3>Direct Market Access</h3>
          <p>Skip the brokers and sell directly. Earn more from every harvest.</p>
        </div>

        <div className="why-card">
          <img src="/assets/Books.jpeg" alt="Knowledge Hub" />
          <h3>Knowledge Hub</h3>
          <p>Get farming tips, pest alerts, and weather insights at your fingertips.</p>
        </div>

        <div className="why-card">
          <img src="/assets/Community.jpeg" alt="Community" />
          <h3>Community Support</h3>
          <p>Connect with other farmers, share advice, and grow together.</p>
        </div>

        <div className="why-card">
          <img src="/assets/Phones.jpeg" alt="Tools" />
          <h3>Smart Tools</h3>
          <p>Use calculators, guides, and calendars to plan better and save time.</p>
        </div>

        {/* Extra Cards */}
        <div className="why-card">
          <img src="/assets/Weather.jpeg" alt="Weather" />
          <h3>Weather Updates</h3>
          <p>Stay prepared with real-time forecasts to protect your crops.</p>
        </div>

        <div className="why-card">
          <img src="/assets/Seed.jpeg" alt="Seeds" />
          <h3>Quality Inputs</h3>
          <p>Find trusted suppliers for seeds, fertilizers, and farm tools.</p>
        </div>

        <div className="why-card">
          <img src="/assets/Chatbox.jpeg" alt="Training" />
          <h3>Chat with AI</h3>
          <p>Learn modern farming methods directly from AI.</p>
        </div>

        <div className="why-card">
          <img src="/assets/Discussion.jpeg" alt="Finance" />
          <h3>Finance Access</h3>
          <p>Connect with microfinance and insurance services built for farmers.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyFarmers;
