import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const images = [
  "../assets/Logo.jpeg",
  "../assets/Market.jpeg",
  "../assets/Tractor.jpeg",
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        >
            <div className="slide-text">
      <h1>Welcome to AgriConnect</h1>
      <p>Your hub for smart farming solutions</p>
        </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
