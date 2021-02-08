import React, { useState } from "react";

import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";
import "../css/App.css";

export const WeekDays = [
  {
      title: 'Monday',
      url: '/',
      cName: 'nav-links'
  },
  {
      title: 'S',
      url: '/search',
      cName: 'nav-links'
  },
  {
    title: 'About',
    url: '/about',
    cName: 'nav-links'
  },
  {
      title: 'Contact',
      url: '/contact',
      cName: 'nav-links'
  },
  
]


const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      const dataWeather = await fetchWeather(query);

      setWeather(dataWeather);
      setQuery("");

      const lat = dataWeather.coord.lat;
      const lon = dataWeather.coord.lon;

      const dataForecast = await fetchForecast(lat, lon);
      setForecast(dataForecast);
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
        onKeyPress={(searchWeather)}
      />
      {weather.main && (
        <div className="weather">
          <h2 className="weather-name">
            <span>{weather.name}</span>
          </h2>
          <div className="weather-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;</sup>
          </div>
          <div className="weather-info">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
      {forecast.daily && (
        <div className="forecast m-5">
        
        <h2 className="forecast-day">
            <span>Monday</span>
          </h2>
          <div className="forecast-temp">
          {Math.round(forecast.daily[0].temp.day)}
            <sup>&deg;</sup>
          </div>
          <div className="forecast-info">
            <img
              className="forecast-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
