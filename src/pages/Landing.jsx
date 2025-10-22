import React, { useState } from "react"; // Make sure useState is imported
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Landing.css";
// REMOVED: import SearchBar from "../components/SearchBar"; // Remove this line

import SmartTools from "../components/SmartTools";
import InfoHub from "../components/InfoHub";
import CommunitySection from "../components/CommunitySection";
import ThankYouSection from "../components/ThankYouSection";
import UsersList from "../components/UsersList";
import { FaUserCircle } from "react-icons/fa";

function Landing() {
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Add this state

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Global search for:", searchTerm);
      // Implement your global search logic here
      alert(`Searching entire website for: ${searchTerm}`);
      setSearchTerm(''); // Clear input
    }
  };

  return (
    <div className="landing-container">
      {/* Main Content */}
      <main className="main-content">
        {/* Floating Cards Hero Section */}
        <section className="floating-hero">
          <div className="hero-background">
            <div className="floating-card card-1">
              <div className="card-icon">🤖</div>
              <h3>AI Farming Assistant</h3>
              <p>24/7 crop advice</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🌦️</div>
              <h3>Smart Weather</h3>
              <p>Precision forecasts</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🛒</div>
              <h3>Marketplace</h3>
              <p>Buy & sell direct</p>
            </div>
          </div>
          
          <div className="hero-center">
            <h1 className="hero-title">
              <span className="title-line">Grow Smarter with</span>
              <span className="title-line accent">AI-Powered Farming</span>
            </h1>
            <p className="hero-subtitle">Join thousands of farmers increasing yields with real-time insights and community support</p>
            
            {/* FIXED: Global Search Bar */}
            <div className="hero-search-container">
              <form onSubmit={handleSearch} className="global-search-form">
                <input
                  type="text"
                  placeholder="Search crops, weather, marketplace, farming advice..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="global-search-input"
                />
                <button type="submit" className="global-search-button">
                  Search
                </button>
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">✅ No credit card required</div>
              <div className="trust-item">🌱 Used by farmers worldwide</div>
              <div className="trust-item">📱 Works on any device</div>
            </div>
          </div>

          {/* Quick Access Nav */}
          <div className="quick-access-nav">
            <a href="/chatboxx" className="quick-link">
              <span className="quick-icon">💬</span>
              <span>Chatbox</span>
            </a>
            <a href="/weather" className="quick-link">
              <span className="quick-icon">🌤️</span>
              <span>Weather</span>
            </a>
            <Link to="/crop-info" className="quick-link">
              <span className="quick-icon">🌱</span>
              <span>Crops</span>
            </Link>
            <a href="/buyandsell" className="quick-link">
              <span className="quick-icon">🛒</span>
              <span>Marketplace</span>
            </a>
            {/* Profile Icon in Quick Access */}
            <div className="quick-link" onClick={handleProfileClick} style={{cursor: "pointer"}}>
              <FaUserCircle size={24} style={{color: "white"}} />
              <span>Profile</span>
            </div>
          </div>

          {/* Show UsersList when profile icon is clicked */}
          {showProfile && (
            <div className="profile-dropdown-hero">
              <UsersList />
            </div>
          )}
        </section>

        {/* Other Sections - UNCHANGED */}
        <InfoHub />
        <SmartTools />
        <CommunitySection />
        <ThankYouSection />
      </main>
    </div>
  );
}

export default Landing;