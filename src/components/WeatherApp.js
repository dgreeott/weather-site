import React, { useState } from "react";

import { fetchWeather } from "./Api/fetchWeather";
import { fetchForcast } from "./Api/fetchForcast";
import "../css/App.css";

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forcast, setForcsat] = useState([]);

  const search = async (e) => {
    if (e.key === "Enter") {
      const dataWeather = await fetchWeather(query);
      const dataForcast = await fetchWeather(query);

      setWeather(dataWeather);
      setForcsat(dataForcast);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search m-5"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
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
          </div>
        </div>
      )}
      {forcast.main && (
        <div className="city m-5">
            {Math.round(forcast.list.main.temp)}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
