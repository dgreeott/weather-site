import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";

import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";
import { fetchAirQuality } from "./Api/fetchAirQuality";

import DailyForecast from "./HomePage/DailyForecast";
import CurrentWeather from "./HomePage/CurrentWeather";
import TodayForecast from "./HomePage/TodayForecast";
import HourlyForecast from "./HomePage/HourlyForecast";
import WeatherToday from "./HomePage/WeatherToday";

import "../css/App.css";

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [air, setAir] = useState({});
  const [errors, setErrors] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const searchWeather = async (e) => {
    try {
      if (e.key === "Enter") {
        const dataWeather = await fetchWeather(query);

        setWeather(dataWeather);
        setQuery("");

        const lat = dataWeather.coord.lat;
        const lon = dataWeather.coord.lon;

        const dataForecast = await fetchForecast(lat, lon);
        setForecast(dataForecast);

        const dataAirQuality = await fetchAirQuality(lat, lon);
        setAir(dataAirQuality);
      }
    } catch {
      if (e.key === "Enter") {
        setErrors(
          <button className="btn btn-danger" onClick={refreshPage}>
            <h1>Clike Me To Try Again!</h1>
          </button>
        );
      }
    }
  };

  return (
    <>
      <Navbar />
      {errors ? (
        <div className="row justify-content-center mt-5">
          <div className="col-sm text-center mt-5">{errors}</div>
        </div>
      ) : (
        <div className="main-container mb-5">
          <div className="container-fluid m-5">
            <div className="row text-center">
              <div className="col-sm">
                <input
                  type="text"
                  className="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={searchWeather}
                  placeholder="Search City + Enter"
                />
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-sm">
                <CurrentWeather weather={forecast} weatherName={weather} />
                <TodayForecast todayForecast={forecast} />
                <HourlyForecast hourlyForecast={forecast} />
                <WeatherToday
                  weatherToday={forecast}
                  weatherName={weather}
                  airQuality={air}
                />
                <DailyForecast dailyForecast={forecast} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherApp;
