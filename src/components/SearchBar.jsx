import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') fetchWeather();
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
      />
      <button onClick={fetchWeather}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
