// src/components/ForecastCard.jsx
import React from 'react';
import './ForecastCard.css'; // Optional if you want custom styling

function ForecastCard({ data, unit }) {
   const { dt_txt, main, weather } = data;
  const date = new Date(dt_txt);

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="forecast-card">
      <h4>{date.toLocaleDateString(undefined, { weekday: 'short' })}</h4>
      <img src={iconUrl} alt={weather[0].description} />
      <p>{weather[0].description}</p>
      <p>{Math.round(main.temp)}°{unit === 'metric' ? 'C' : 'F'}</p>
    </div>
  );
}

export default ForecastCard;