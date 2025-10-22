import React from "react";
import "./CommunitySection.css";
import { useNavigate } from "react-router-dom";

const CommunitySection = () => {
  const navigate = useNavigate();

  const handleEnterChat = () => {
    navigate("/community-chat");
  };

  return (
    <section className="community-section">
      <div className="community-container">
        <div className="community-text">
          <h2>🌍 Farmer Community</h2>
          <p>
            Connect, share, and grow together! Our community lets farmers
            exchange ideas, tips, and experiences in real time. Discuss crop
            management, market prices, and modern farming solutions — all in one place.
          </p>
          <button className="enter-chat-btn" onClick={handleEnterChat}>
            💬 Enter Chat
          </button>
        </div>
        <div className="community-image">
          <img
            src="https://i.pinimg.com/736x/d1/d6/fd/d1d6fde9b2b81c1ac28fe22135cf569f.jpg"
            alt="Farmers chatting"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
