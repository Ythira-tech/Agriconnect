import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "a644785b550cbdaa20dd292178e8d4bb";

  const fetchWeather = async () => {
    if (!city) return;
    setError(null);
    setLoading(true);

    try {
      // ✅ Step 1: Get city coordinates (use v2.5 instead of v3.0)
      const geoRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!geoRes.ok) throw new Error("City not found");
      const geoJson = await geoRes.json();
      const { coord, name } = geoJson;
      const country = geoJson.sys?.country || "";

      setLocation({ name, country });

      // ✅ Step 2: Get 7-day forecast using One Call API 3.0
      const oneCallRes = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`
      );

      if (!oneCallRes.ok) throw new Error("Failed to fetch weather forecast");
      const oneCallJson = await oneCallRes.json();

      // ✅ Step 3: Update states
      setWeatherData(oneCallJson.current);
      setForecast(oneCallJson.daily.slice(0, 7)); // show 7 days (Mon–Sun)
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(err.message || "Failed to fetch weather data");
      setWeatherData(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-section">
      <h1>Weather Forecast</h1>

      <div className="search-area">
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      </div>

      {loading && <div className="weather-loading">Fetching data...</div>}
      {error && <div className="weather-error">{error}</div>}

      {weatherData && forecast.length > 0 && (
        <WeatherCard
          location={location}
          weatherData={weatherData}
          forecast={forecast}
        />
      )}
    </div>
  );
}

export default Weather;
