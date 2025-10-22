import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import "./WeatherCard.css";

function Weather() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "a644785b550cbdaa20dd292178e8d4bb";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    
    setError(null);
    setLoading(true);

    try {
      console.log("Fetching weather for:", city);

      // ✅ Use the 5-day forecast API (free tier)
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.trim()}&appid=${apiKey}&units=metric`
      );

      if (!weatherRes.ok) {
        throw new Error(`City "${city}" not found. Please check spelling.`);
      }
      
      const weatherJson = await weatherRes.json();
      console.log("Weather data:", weatherJson);
      
      // Transform the data for your component
      const locationData = {
        name: weatherJson.city.name,
        country: weatherJson.city.country
      };

      // Current weather (first item in list)
      const currentWeather = weatherJson.list[0];
      
      // Process forecast data to get daily forecast - NOW 7 DAYS
      const dailyForecast = processForecastData(weatherJson.list);

      setLocation(locationData);
      setWeatherData(currentWeather);
      setForecast(dailyForecast);

    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(err.message || "Failed to fetch weather data");
      setWeatherData(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to process forecast data into daily format
  const processForecastData = (list) => {
    const dailyData = {};
    
    list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!dailyData[date]) {
        dailyData[date] = {
          dt: item.dt,
          temp: {
            day: item.main.temp,
            min: item.main.temp_min,
            max: item.main.temp_max
          },
          weather: item.weather,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          wind_speed: item.wind.speed
        };
      } else {
        // Update min/max temps for the day
        if (item.main.temp_min < dailyData[date].temp.min) {
          dailyData[date].temp.min = item.main.temp_min;
        }
        if (item.main.temp_max > dailyData[date].temp.max) {
          dailyData[date].temp.max = item.main.temp_max;
        }
        // Use midday temperature for day temp (around 12:00)
        const itemHour = new Date(item.dt * 1000).getHours();
        if (itemHour >= 11 && itemHour <= 14) {
          dailyData[date].temp.day = item.main.temp;
        }
      }
    });
    
    // Convert to array and return first 7 days (changed from 5 to 7)
    return Object.values(dailyData).slice(0, 7);
  };

  return (
    <div className="weather-section">
      <h1>Weather Forecast</h1>

      <div className="search-area">
        <SearchBar 
          city={city} 
          setCity={setCity} 
          fetchWeather={fetchWeather} 
        />
      </div>

      {loading && <div className="weather-loading">Fetching data...</div>}
      {error && <div className="weather-error">{error}</div>}

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{color: 'white', fontSize: '12px', marginTop: '10px'}}>
          Data Status: {weatherData ? 'Loaded' : 'No data'} | 
          Forecast: {forecast.length} days | 
          Location: {location ? location.name : 'None'}
        </div>
      )}

      <WeatherCard
        location={location}
        weatherData={weatherData}
        forecast={forecast}
      />
    </div>
  );
}

export default Weather;