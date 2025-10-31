import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, { // ← Changed to 5001
        name: userName,
        email,
        password,
      });

      alert(response.data.message);
      navigate("/landing");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Try again.");
    }
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
            <input 
              type="text" 
              placeholder="Your Name" 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Create Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Repeat Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="signup-btn">
            Join Free
          </button>
        </form>

        

        <p className="signin-text">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;