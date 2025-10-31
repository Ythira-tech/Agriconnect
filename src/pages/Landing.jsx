import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";

import SmartTools from "../components/SmartTools";
import InfoHub from "../components/InfoHub";
import CommunitySection from "../components/CommunitySection";
import ThankYouSection from "../components/ThankYouSection";
import UserProfile from "../components/UserProfile";
import AuthForms from "../components/AuthForms";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

function Landing() {
  const [showAuth, setShowAuth] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { currentUser, logout, updateProfile } = useAuth(); // Make sure updateProfile is destructured

  const handleProfileClick = () => {
    if (currentUser) {
      setShowUserProfile(true);
    } else {
      setShowAuth(true);
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserProfile(false);
  };

  const handleUpdateProfile = async (updatedData) => {
    try {
      const result = await updateProfile(updatedData);
      if (result.success) {
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="landing-container">
      <main className="main-content">
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

            <div className="trust-indicators">
              <div className="trust-item">✅ No credit card required</div>
              <div className="trust-item">🌱 Used by farmers worldwide</div>
              <div className="trust-item">📱 Works on any device</div>
            </div>
          </div>

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
            
            <div className="quick-link" onClick={handleProfileClick} style={{cursor: "pointer"}}>
              {currentUser?.profilePhoto ? (
                <img 
                  src={currentUser.profilePhoto} 
                  alt="Profile"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <FaUserCircle size={24} style={{color: "white"}} />
              )}
              <span>Profile</span>
              {currentUser && (
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  width: '8px',
                  height: '8px'
                }}></div>
              )}
            </div>
          </div>

          {showAuth && (
            <AuthForms 
              onClose={() => setShowAuth(false)}
              defaultMode="login"
            />
          )}

          {showUserProfile && currentUser && (
            <UserProfile 
              user={currentUser}
              onClose={() => setShowUserProfile(false)}
              onUpdateProfile={handleUpdateProfile} // Make sure this is passed
              onLogout={handleLogout}
            />
          )}
        </section>

        <InfoHub />
        <SmartTools />
        <CommunitySection />
        <ThankYouSection />
      </main>
    </div>
  );
}

export default Landing;