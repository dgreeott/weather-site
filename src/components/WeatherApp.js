import React, { useState } from "react";

import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";
import DailyForecast from "./DailyForecast";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "./TodayForecast";
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
        <div className="container">
          <div className="row">
          <div className="col-lg">
            <input
              type="text"
              className="search m-5 "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={searchWeather}
              placeholder="Search City"
            />
            </div>
          </div>
        </div>

        <div classname="">
          <div className="headerItems">
            <a className="head-links m-5">Today</a>
            <a className="head-links m-5">Hourly</a>
            <a className="head-links m-5">5 Day</a>
          </div>
        </div>

        <CurrentWeather weather={weather} />
        <TodayForecast forecast={forecast} />
        <DailyForecast forecast={forecast} />
      </div>
    </>
  );
};

export default WeatherApp;
