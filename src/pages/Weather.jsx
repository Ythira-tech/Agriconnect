import React, { useState, useRef } from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay"; // Renamed to avoid conflict
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);

  const apiKey = "a644785b550cbdaa20dd292178e8d4bb";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    
    // Cancel previous request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    // Create new AbortController for this request
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    setError(null);
    setLoading(true);

    try {
      console.log("Fetching weather for:", city);

      // Use the 5-day forecast API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.trim()}&appid=${apiKey}&units=metric`,
        { signal }
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`City "${city}" not found. Please check spelling.`);
        } else if (response.status === 401) {
          throw new Error("API key error. Please check your OpenWeatherMap API key.");
        } else if (response.status === 429) {
          throw new Error("Too many requests. Please wait a moment and try again.");
        } else {
          throw new Error(`Weather service error: ${response.status}`);
        }
      }
      
      const data = await response.json();
      console.log("Weather data received:", data);
      
      // Transform the data
      const locationData = {
        name: data.city.name,
        country: data.city.country
      };

      // Current weather (first item in list)
      const currentWeather = data.list[0];
      
      // Process forecast data
      const dailyForecast = processForecastData(data.list);

      setLocation(locationData);
      setWeatherData(currentWeather);
      setForecast(dailyForecast);

    } catch (err) {
      // Don't set error if the request was aborted
      if (err.name === 'AbortError') {
        console.log('Request was aborted');
        return;
      }
      
      console.error("Error fetching weather:", err);
      
      if (err.message.includes('timeout') || err.message.includes('Failed to fetch')) {
        setError("Network error. Please check your internet connection and try again.");
      } else {
        setError(err.message || "Failed to fetch weather data. Please try again.");
      }
      
      setWeatherData(null);
      setForecast([]);
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  };

  // Process forecast data into daily format
  const processForecastData = (list) => {
    const dailyData = {};
    
    list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString(); // Use toDateString for consistency
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
        // Use midday temperature for day temp
        const itemHour = new Date(item.dt * 1000).getHours();
        if (itemHour >= 11 && itemHour <= 14) {
          dailyData[date].temp.day = item.main.temp;
        }
      }
    });
    
    // Convert to array and return first 7 days
    return Object.values(dailyData).slice(0, 7);
  };

  // Cancel request if component unmounts
  React.useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <div className="weather-section">
      <div className="weather-header">
        <h1>🌤️ Weather Forecast</h1>
        <p>Get accurate weather predictions for your farming activities</p>
      </div>

      <div className="search-area">
        <SearchBar 
          city={city} 
          setCity={setCity} 
          fetchWeather={fetchWeather} 
          loading={loading}
        />
      </div>

      {loading && (
        <div className="weather-loading">
          <div className="loading-spinner"></div>
          <p>Fetching weather data...</p>
          <small>This may take a few seconds</small>
        </div>
      )}
      
      {error && (
        <div className="weather-error">
          <div className="error-message">{error}</div>
          <div className="error-actions">
            <button 
              onClick={fetchWeather} 
              className="retry-button"
              disabled={loading}
            >
              Retry
            </button>
            <button 
              onClick={() => setError(null)} 
              className="error-dismiss"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <WeatherDisplay
        location={location}
        weatherData={weatherData}
        forecast={forecast}
      />
    </div>
  );
}

export default Weather;