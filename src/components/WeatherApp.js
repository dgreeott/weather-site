import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";
import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";
import DailyForecast from "./DailyForecast";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from './TodayForecast';
import "../css/App.css";

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
    <>
      <div className="main-container">
        <input
          type="text"
          className="search m-4"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={searchWeather}
          placeholder="Where are you looking for..."
        />

        <Navbar />
        <CurrentWeather weather={weather} />
        <TodayForecast forecast={forecast} />
        
        <DailyForecast forecast={forecast} />
      </div>
    </>
  );
};

export default WeatherApp;
