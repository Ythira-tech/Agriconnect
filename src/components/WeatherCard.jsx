import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weatherData, forecast }) {
  if (!weatherData) {
    return <p className="no-weather">No weather data yet. Try searching a city!</p>;
  }

  return (
    <div className="weather-wrapper">
      {/* Current Weather */}
      <div className="weather-card current">
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <p>{Math.round(weatherData.main.temp)}°C</p>
        <p>{weatherData.weather[0].description}</p>
      </div>

      {/* Forecast */}
      <div className="forecast-section">
        <h3>5-Day Forecast</h3>
        <div className="forecast-grid">
          {forecast.map((day, index) => (
            <div key={index} className="forecast-card">
              <h4>{new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: "short" })}</h4>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <p>{Math.round(day.main.temp)}°C</p>
              <p>{day.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
