import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ location = {}, weatherData, forecast = [] }) => {
  if (!weatherData || !forecast || forecast.length === 0) {
    return <p className="no-data">No weather data yet — try a search above 🌍</p>;
  }

  // eslint-disable-next-line no-unused-vars
  const formatDay = (dt) => {
    const ts = typeof dt === "number" && dt < 1e12 ? dt * 1000 : dt;
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, { weekday: "short" });
  };

  // get current temp robustly
  const currentTemp =
    (weatherData.temp ?? weatherData.main?.temp ?? weatherData.main?.temp) || null;
  const currentDesc =
    weatherData.weather?.[0]?.description ??
    weatherData.weather?.[0]?.main ??
    "";

  return (
    <div className="weather-container">
      {/* Current / header card */}
      <div className="current-card">
        <div className="location">
          {location.name} {location.country ? `, ${location.country}` : ""}
        </div>
        <div className="current-temp">
          {currentTemp !== null ? `${Math.round(currentTemp)}°C` : "--"}
        </div>
        <div className="current-desc">{currentDesc}</div>
      </div>

      {/* dynamic day count */}
      <div className="forecast-title">{forecast.length}-Day Forecast</div>

      {/* Forecast grid */}
      <div className="forecast-grid">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>
            {day.weather && day.weather[0] ? (
              <>
                <img
                  className="icon"
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
                <p>{Math.round(day.temp.day)}°C</p>
                <p>{day.weather[0].description}</p>
              </>
            ) : (
              <div className="icon placeholder" />
            )}
            <div className="temp-range">
              {day.temp
                ? `${Math.round(day.temp.max ?? day.temp.day ?? 0)}° / ${Math.round(
                    day.temp.min ?? day.temp.day ?? 0
                  )}°`
                : "-- / --"}
            </div>
            <div className="short-desc">{day.weather?.[0]?.main ?? ""}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
