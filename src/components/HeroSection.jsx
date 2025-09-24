import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div
        className="hero-image"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/Greenlight.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#2D5128",
          fontfamily:" 'Montserrat', sans-serif",
          height: "100vh",
          width: "100%",
          position: "relative",
          //overflow: "hidden",
        }}
      >
        {/* Logo + Website Name (Top Left) */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "30px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 3,
          }}
        >
          <img
            src="/assets/Logo.jpeg"
            alt="Logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "28px",
              fontWeight: "700",
              color: "#fff",
              textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
              letterSpacing: "2px",
            }}
          >
            AgriConnect
          </h1>
        </div>

        {/* Search Bar (Top Middle) */}
        <div
          style={{
            position: "absolute",
            top: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <form
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "12px",
              padding: "6px 12px",
              backdropFilter: "blur(6px)",
            }}
          >
            <input
              type="text"
              placeholder="Search farmers, crops, resources..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#fff",
                width: "300px",
                fontSize: "16px",
                fontWeight: "500",
                padding: "6px",
                fontfamily: "'Lora', serif",
              }}
            />
            <button
              type="submit"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "8px",
                color: "#fff",
                padding: "6px 14px",
                marginLeft: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontfamily: "'Lora', serif",
              }}
            >
              Search
            </button>
          </form>
        </div>

        {/* Fancy Transparent Links (Top Right) */}
        <div
          style={{
            position: "absolute",
            top: "25px",
            right: "40px",
            display: "flex",
            gap: "20px",
            background: "rgba(255,255,255,0.1)",
            padding: "10px 20px",
            borderRadius: "12px",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.3)",
            zIndex: 3,
            fontfamily: "'Lora', serif",
          }}
        >
          <a
            href="/market"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
              fontfamily: "'Lora', serif",
            }}
          >
            Marketplace
          </a>
          <a
            href="/knowledge"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
              fontfamily: "'Lora', serif",
            }}
          >
            Knowledge Hub
          </a>
          <a
            href="/community"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
              fontfamily: "'Lora', serif",
            }}
          >
            Community
          </a>
          <a
            href="/resources"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
              fontfamily: "'Lora', serif",
            }}
          >
            Resources
          </a>
        </div>

        {/* Tagline + CTAs (Left Side) */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50px",
            transform: "translateY(-50%)",
            maxWidth: "450px",
            color: "#fff",
            zIndex: 3,
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "20px",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Smart farming starts <br /> with the right info.
          </h2>

          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="/crops"
              style={{
                padding: "12px 24px",
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "10px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontfamily: "'Lora', serif",
              }}
            >
              Explore Crops
            </a>
            <Link
              to="/signup"
              style={{
                padding: "12px 24px",
                background: "rgba(0,200,83,0.7)", // green accent
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "10px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontfamily:" 'Lora', serif",
              }}
            >
              Join Free
            </Link>
          </div>

          {/* 👇 Quote goes right here */}
          <p
            style={{
              marginTop: "30px",
              fontStyle: "italic",
              fontSize: "18px",
              opacity: "0.9",
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              fontFamily: "'Lora', serif",
            }}
          >
            “A farmer is not just growing crops, <br /> they are growing hope
            for tomorrow.”
          </p>
        </div>

        {/* Overlay Collage Grid (Right Side) */}
        <div className="overlay-grid">
          <img src="/assets/African.jpeg" alt="box1" className="box box1" />
          <img src="/assets/Chicken.jpeg" alt="box2" className="box box2" />
          <img src="/assets/Cowowner.jpeg" alt="box3" className="box box3" />
          <img src="/assets/Fruits.jpeg" alt="box4" className="box box4" />
          <img src="/assets/Hay.jpeg" alt="box5" className="box box5" />
          <img src="/assets/Maize.jpeg" alt="box6" className="box box6" />
          <img src="/assets/Plantation.jpeg" alt="box7" className="box box7" />
          <img src="/assets/Tractor.jpeg" alt="box8" className="box box8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
