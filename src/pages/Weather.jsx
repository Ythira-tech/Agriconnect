import React, { useState, useRef } from "react";
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
  const abortControllerRef = useRef(null);

  const apiKey = "a644785b550cbdaa20dd292178e8d4bb";

  // Helper function to fetch with timeout
  const fetchWithTimeout = (url, options = {}, timeout = 10000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), timeout)
      )
    ]);
  };

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

      // ✅ Use fetch with timeout
      const weatherRes = await fetchWithTimeout(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.trim()}&appid=${apiKey}&units=metric`,
        { signal },
        10000 // 10 second timeout
      );

      if (!weatherRes.ok) {
        if (weatherRes.status === 404) {
          throw new Error(`City "${city}" not found. Please check spelling.`);
        } else if (weatherRes.status === 401) {
          throw new Error("API key error. Please check your OpenWeatherMap API key.");
        } else if (weatherRes.status === 429) {
          throw new Error("Too many requests. Please wait a moment and try again.");
        } else {
          throw new Error(`Weather service error: ${weatherRes.status}`);
        }
      }
      
      const weatherJson = await weatherRes.json();
      console.log("Weather data received:", weatherJson);
      
      // Transform the data for your component
      const locationData = {
        name: weatherJson.city.name,
        country: weatherJson.city.country
      };

      // Current weather (first item in list)
      const currentWeather = weatherJson.list[0];
      
      // Process forecast data to get daily forecast - 7 DAYS
      const dailyForecast = processForecastData(weatherJson.list);

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
      
      if (err.message === 'Request timeout') {
        setError("Request timed out. Please check your internet connection and try again.");
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
      <h1>Weather Forecast</h1>

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
          Fetching weather data...
          <div className="loading-note">This may take a few seconds</div>
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

      <WeatherCard
        location={location}
        weatherData={weatherData}
        forecast={forecast}
      />
    </div>
  );
}

export default Weather;