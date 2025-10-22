import React from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ city, setCity, fetchWeather, loading = false }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) fetchWeather();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        className="search-input"
        disabled={loading}
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : <FaSearch />}
      </button>
    </div>
  );
};

export default SearchBar;