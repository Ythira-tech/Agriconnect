// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/landing");

    localStorage.setItem("user", JSON.stringify({ name: userName }));

    alert("Signup successful!");
    navigate("/landing");
  };

  return (
    <div className="signup-container">
      {/* Left side */}
      <div className="signup-left">
        <h1>Let's Get Started</h1>
        <p>
          Join us today and be part of a brighter future in agriculture. 
          Unlock opportunities, grow smarter, and connect with a community 
          dedicated to sustainable farming.
        </p>
        <div className="presented">
          <span>Presented by</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Company Logo" className="logo" />
        </div>
      </div>

      {/* Right side */}
      <div className="signup-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" 
            value={userName}
             onChange={(e) => setUserName(e.target.value)}
            required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" 
            required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Create Password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Repeat Password" required />
          </div>
          <button type="submit" className="signup-btn">
            Join Free
          </button>
        </form>

        <div className="or-section">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <div className="social-icons">
          <button className="social-btn fb">f</button>
          <button className="social-btn tw">t</button>
          <button className="social-btn g">G</button>
        </div>

        <p className="signin-text">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
