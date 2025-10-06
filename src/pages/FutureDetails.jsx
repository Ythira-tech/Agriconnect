import React from "react";
import "./FutureDetails.css"; // 👈 for styling

const FutureDetails = () => {
  return (
    <div className="future-details">
      {/* Left Column: Text */}
      <div className="future-text">
        <h1>Shaping Africa’s Future</h1>
        <p>
          Agriculture is more than just farming—it’s the foundation of life,
          community, and progress. By embracing smarter, sustainable practices
          today, we ensure healthier harvests, empowered farmers, and stronger
          communities tomorrow.
        </p>
        <p>
          Every seed planted carries the promise of growth, innovation, and
          resilience. Together, we can cultivate not only the land but also a
          future where food security, environmental balance, and prosperity go
          hand in hand.
        </p>
        <h2>Sustainable Practices</h2>
      <p>
        Embracing techniques like crop rotation, organic fertilizers, and
        renewable energy in farming not only increases productivity but also
        protects the environment for future generations.
      </p>

      <h2>Empowering Farmers</h2>
      <p>
        Access to resources, knowledge, and modern tools ensures that farmers
        are not just surviving but thriving—building resilient communities
        that can feed themselves and the world.
      </p>

      <h2>Innovation & Technology</h2>
      <p>
        From AI-driven crop monitoring to precision irrigation, technology is
        revolutionizing how we grow, harvest, and distribute food.
      </p>
      </div>

      {/* Right Column: Image */}
      <div className="future-image">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
          alt="African farming future"
        />
      </div>
    </div>
  );
};

export default FutureDetails;
