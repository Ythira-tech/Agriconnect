import React, { useState } from "react";
import "./Landing.css";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import SmartTools from "../components/SmartTools";
import QualityInputs from "../components/QualityInputs";

function Landing() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);

  const apiKey = "a644785b550cbdaa20dd292178e8d4bb";

  const fetchWeather = async () => {
    if (!city) return;

    try {
      // ✅ Fetch current weather
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const weatherJson = await weatherRes.json();
      setWeatherData(weatherJson);

      // ✅ Fetch forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastJson = await forecastRes.json();

      // ✅ Filter for midday values (1 per day)
      const daily = forecastJson.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="landing-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">AgriConnect</h1>
        <form className="sidebar-search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search AgriConnect..." />
        </form>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#weather">Weather</a></li>
          <li><a href="#library">Crop Library</a></li>
          <li><a href="#market">Marketplace</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="welcome">
          <h2>Welcome to AgriConnect!</h2>
          <p>Empowering farmers with knowledge and insights.</p>
        </section>

        {/* Weather Section */}
        <section id="weather" className="weather-section">
          <h2>Weather Forecast</h2>

          {/* ✅ Use only this SearchBar */}
          <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

          {/* ✅ Weather + forecast cards */}
          <WeatherCard weatherData={weatherData} forecast={forecast} />

        </section>
        <SmartTools />
        <QualityInputs />
      </main>
    </div>
  );
}

export default Landing;
