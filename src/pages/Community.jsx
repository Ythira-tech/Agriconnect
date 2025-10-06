import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [pollResult, setPollResult] = useState(null);

  const handlePollVote = (option) => {
    setPollResult(option);
    alert("Login required to vote!");
  };

  return (
    <div className="community-container">
      {/* Page Header */}
      <header className="community-header">
        <h1>Welcome to the AgriConnect Community</h1>
        <p>
          Connect with farmers and agri-students. Share knowledge, ask questions,
          and grow together 🌱
        </p>
      </header>

      {/* Featured Discussion Preview */}
      <section className="community-section">
        <h2>Featured Discussions</h2>
        <div className="card">
          <h3>How do I treat maize leaf blight? 🌽</h3>
          <p>
            A farmer noticed yellowing leaves in his maize field. What are the
            best organic remedies?
          </p>
          <button className="login-btn">View More (Login Required)</button>
        </div>

        <div className="card">
          <h3>Best crops for the short rains season? 🌧️</h3>
          <p>
            What crops are best suited for the upcoming rainy season in East
            Africa?
          </p>
          <button className="login-btn">View More (Login Required)</button>
        </div>
      </section>

      {/* Success Story Highlight */}
      <section className="community-section">
        <h2>Success Story Spotlight</h2>
        <div className="card">
          <h3>Meet Jane 👩‍🌾</h3>
          <p>
            Jane doubled her harvest using drip irrigation and smart farming
            practices. Her journey is inspiring many local farmers.
          </p>
          <button className="login-btn">Read Full Story (Login Required)</button>
        </div>
      </section>

      {/* Community Poll */}
      <section className="community-section">
        <h2>Community Poll</h2>
        <p>Which crop do you plan to grow this season?</p>
        <div className="poll-options">
          {["Maize 🌽", "Beans 🫘", "Tomatoes 🍅"].map((option, index) => (
            <button
              key={index}
              className="poll-btn"
              onClick={() => handlePollVote(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {pollResult && <p>You voted: {pollResult}</p>}
        <p className="login-hint">Login required to cast your vote.</p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>🌍 Join Our Growing Community!</h2>
        <p>
          Unlock full access to discussions, resources, and collaboration
          opportunities by signing up.
        </p>
        <div className="cta-buttons">
          <a href="/signup" className="cta-btn signup">
            Sign Up
          </a>
          <a href="/login" className="cta-btn login">
            Login
          </a>
        </div>
      </section>
    </div>
  );
};

export default Community;
