import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";
import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";
import DailyForecast from "./DailyForecast";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "./TodayForecast";
import HourlyForecast from "./HourlyForecast";
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
      <Navbar />
      <div className="container m-5">
        <div className="row m-5">
          <div className="col-sm text-center">
            <input
              type="text"
              className="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={searchWeather}
              placeholder="Search City"
            />
          </div>
        </div>
        <div className="row">
          <CurrentWeather weather={weather} />
        </div>
        <div className="row">
          <TodayForecast todayForecast={forecast} />
        </div>
        <div className="row">
          <HourlyForecast hourlyForecast={forecast} />
        </div>
        <div className="row">
          <DailyForecast dailyForecast={forecast} />
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
