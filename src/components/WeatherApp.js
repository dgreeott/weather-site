import React, { useState } from "react";

import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";
import "../css/App.css";

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forcast, setForcsat] = useState({});

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      const dataWeather = await fetchWeather(query);

      setWeather(dataWeather);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search m-4"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={searchWeather}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
            <button className="btn btn-primary">4 Day Forcast</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
