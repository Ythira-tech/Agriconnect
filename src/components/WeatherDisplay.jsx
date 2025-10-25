import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ location, weatherData, forecast }) => {
  if (!weatherData || !location) {
    return (
      <div className="weather-welcome">
        <div className="welcome-card">
          <h3>🌾 Welcome to Weather Forecast</h3>
          <p>Search for any city to get detailed weather information and 7-day forecasts to help plan your farming activities.</p>
          <div className="weather-tips">
            <div className="tip">
              <span>💡</span>
              <span>Check weather before planting</span>
            </div>
            <div className="tip">
              <span>💡</span>
              <span>Monitor rainfall for irrigation planning</span>
            </div>
            <div className="tip">
              <span>💡</span>
              <span>Plan harvesting around dry weather</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="weather-display">
      {/* Current Weather */}
      <div className="current-weather-card">
        <div className="location-info">
          <h2>{location.name}, {location.country}</h2>
          <p className="current-date">{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
        
        <div className="weather-main">
          <div className="temperature-section">
            <div className="current-temp">
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div className="weather-description">
              {weatherData.weather[0].description}
            </div>
          </div>
          
          <div className="weather-icon">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
          </div>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span className="label">Feels Like</span>
            <span className="value">{Math.round(weatherData.main.feels_like)}°C</span>
          </div>
          <div className="detail-item">
            <span className="label">Humidity</span>
            <span className="value">{weatherData.main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="label">Wind</span>
            <span className="value">{weatherData.wind.speed} m/s</span>
          </div>
          <div className="detail-item">
            <span className="label">Pressure</span>
            <span className="value">{weatherData.main.pressure} hPa</span>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      {forecast.length > 0 && (
        <div className="forecast-section">
          <h3>7-Day Forecast</h3>
          <div className="forecast-grid">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="forecast-day">
                  {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className="forecast-icon">
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt={day.weather[0].description}
                  />
                </div>
                <div className="forecast-temp">
                  <span className="high">{Math.round(day.temp.max)}°</span>
                  <span className="low">{Math.round(day.temp.min)}°</span>
                </div>
                <div className="forecast-desc">
                  {day.weather[0].description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;