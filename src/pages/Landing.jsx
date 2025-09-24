// src/pages/Landing.jsx
import React from "react";
import "./Landing.css";
import CropLibrary from "../components/CropLibrary";
import { FaHome, FaSeedling, FaUsers, FaComments, FaCogs } from "react-icons/fa";

const Landing = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName = storedUser?.name || "Guest";

  return (
    <div className="landing-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">AgriConnect</h2>

        {/* 🔍 Search Bar */}
        <form className="sidebar-search">
          <input type="text" placeholder="Search..." />
        </form>

        <nav className="nav-links">
          <a href="#home"><FaHome /> Home</a>
          <a href="#library"><FaSeedling /> Crop Library</a>
          <a href="#farmers"><FaUsers /> Farmers</a>
          <a href="#chat"><FaComments /> Chat</a>
          <a href="#features"><FaCogs /> Features</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Welcome Section */}
        <section id="home" className="welcome-text">
          <h1>Welcome, {userName}!</h1>
          <p>Your personalized agricultural hub starts here.</p>
        </section>

        {/* Crop Library Section */}
        <section id="library" className="section">
          <h2>🌱 Explore Crop Library</h2>
          <CropLibrary />
        </section>

        {/* Direct Market Access */}
        <section id="features" className="why-card">
          <img src="/assets/Market.jpeg" alt="Market Access" />
          <h3>Direct Market Access</h3>
          <p>Skip the brokers and sell directly. Earn more from every harvest.</p>
        </section>

        {/* Farmers Section */}
        <section id="farmers" className="section">
          <h2>👩🏾‍🌾 Connect with Farmers</h2>
          <p>Build networks, share knowledge, and collaborate with fellow farmers.</p>
        </section>

        {/* Chat Section */}
        <section id="chat" className="section">
          <h2>💬 Community Chat</h2>
          <p>Engage in real-time conversations with farmers, experts, and buyers.</p>
        </section>
      </div>
    </div>
  );
};

export default Landing;
