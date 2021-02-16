import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";

import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";

import DailyForecast from "./HomePage/DailyForecast";
import CurrentWeather from "./HomePage/CurrentWeather";
import TodayForecast from "./HomePage/TodayForecast";
import HourlyForecast from "./HomePage/HourlyForecast";
import WeatherToday from "./HomePage/WeatherToday";

import CovidInfo from "./HomePage/CovidInfo";

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
      <div className="container-fluid m-5">
        <div className="row">
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
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
        <div className="col-sm-8">
          <CurrentWeather weather={weather} />
          <TodayForecast todayForecast={forecast} />
          <WeatherToday weatherToday={weather} />
          <HourlyForecast hourlyForecast={forecast} />
          <DailyForecast dailyForecast={forecast} />
          </div>
          <div className="col-sm-3">
          <CovidInfo covidInfo={forecast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
