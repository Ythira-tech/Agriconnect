import React from "react";
import "./ThankYouSection.css";

const ThankYouSection = () => {
  return (
    <section className="thankyou-section">
      <div className="thankyou-container">
        <h2>🙏 Thank You for Visiting <span>AgriConnect</span></h2>
        <p>
          We’re glad to have you as part of our growing farming community! 🌱  
          Keep learning, sharing, and innovating — together we can make agriculture smarter and more sustainable.
        </p>

        <div className="thankyou-buttons">
          <a href="/community-chat" className="btn-primary">Join Community Chat</a>
          <a href="/weather" className="btn-outline">Check Weather</a>
        </div>

        <footer className="thankyou-footer">
          <p>© {new Date().getFullYear()} AgriConnect. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default ThankYouSection;
