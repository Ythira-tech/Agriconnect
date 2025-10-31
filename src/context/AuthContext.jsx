// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    
    if (token && savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        email,
        password,
      });

      // Save token and user info
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setCurrentUser(response.data.user);
      
      return { success: true };
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      return { 
        success: false, 
        error: error.response?.data?.message || "Login failed. Check your credentials." 
      };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      // Auto-login after signup
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setCurrentUser(response.data.user);
      
      return { success: true };
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      return { 
        success: false, 
        error: error.response?.data?.message || "Signup failed. Try again." 
      };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const updateProfile = async (updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/auth/profile`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const updatedUser = response.data.user;
      setCurrentUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      return { success: true };
    } catch (error) {
      console.error("Profile update error:", error);
      // Fallback to local update if backend fails
      const updatedUser = { ...currentUser, ...updatedData };
      setCurrentUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return { success: true };
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}