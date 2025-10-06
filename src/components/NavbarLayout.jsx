// src/components/NavbarLayout.jsx
import React from 'react';
import Landing from './Landing';
import '../App.css';
import './Landing.css'; // Optional: if you want separate styling for NavbarLayout

const NavbarLayout = ({ children }) => {
  return (
    <div className="app">
      <Landing />
      <div className="nav-links">
        {children}
        </div>
    </div>
  );
};

export default NavbarLayout;

