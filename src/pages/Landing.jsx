import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Landing.css";
import SearchBar from "../components/SearchBar";

import SmartTools from "../components/SmartTools";
import InfoHub from "../components/InfoHub";
import CommunitySection from "../components/CommunitySection";
import ThankYouSection from "../components/ThankYouSection";
import UsersList from "../components/UsersList"; // import UsersList
import { FaUserCircle } from "react-icons/fa"; // import profile icon

function Landing() {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile); // toggle UsersList
  };

  return (
    <div className="landing-container">
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="navbar-content">
          <h1 className="header">AgriConnect</h1>
          <ul className="nav-links">
            <li><a href="/chatbox">Chatbox</a></li>
            <li><a href="/weather">Weather</a></li>
            <Nav.Link as={Link} to="/crop-info">Crops</Nav.Link>
            <li><a href="/buyandsell">BuyandSell</a></li>
            {/* Profile Icon */}
            <li>
              <FaUserCircle
                size={32}
                style={{ cursor: "pointer" }}
                onClick={handleProfileClick}
              />
            </li>
          </ul>
        </div>
      </header>

      {/* Show UsersList when profile icon is clicked */}
      {showProfile && (
        <div className="profile-dropdown">
          <UsersList />
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section with Video */}
        <section className="photo">
          <div className="overlay"></div>

          {/* Overlay Content */}
          <div className="photo-overlay">
            <h2>Welcome to AgriConnect</h2>
            <SearchBar
              onSubmit={(e) => e.preventDefault()}
              type="text"
              placeholder="Search ..."
            />
          </div>
        </section>

        {/* Other Sections */}
        <InfoHub />
        <SmartTools />
        <CommunitySection />
        <ThankYouSection />
      </main>
    </div>
  );
}

export default Landing;
