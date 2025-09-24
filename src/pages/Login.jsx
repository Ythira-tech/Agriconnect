import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/landing");
    
    localStorage.setItem("user", JSON.stringify({ name: email }));

    alert("Login successful!");
    navigate("/landing");
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
            <input type="email" placeholder="Your Email" 
            value={email}
              onChange={(e) => setEmail(e.target.value)}
            required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" 
            value={password}
              onChange={(e) => setPassword(e.target.value)}
            required />
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
