import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // <-- added
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // save token and user info
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful!");
      navigate("/landing");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed. Check your credentials.");
    }
  };

  return (
    <div className="login-container">
      {/* Left side - text */}
      <div className="login-left">
        <h2>Welcome Back</h2>
        <p>
          Welcome back! Please log in to continue growing with us and access
          your personalized dashboard.
        </p>
      </div>

      {/* Right side - form */}
      <div className="login-right">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
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
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="or-section">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <div className="social-login">
          <button className="social-btn">f</button>
          <button className="social-btn">t</button>
          <button className="social-btn">G</button>
        </div>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
