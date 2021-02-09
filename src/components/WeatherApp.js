import React, { useState } from "react";

import { fetchWeather } from "./Api/fetchWeather";
import { fetchForecast } from "./Api/fetchForecast";
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
        <div className="weather">
          <h2 className="weather-name">
            <span>{weather.name}</span>
          </h2>
          <div className="weather-temp">
            {Math.round(weather.main.temp)}&deg;
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
        <div className="forecast mt-5">
          <div className="forecast-temp">
            <div className="row">
              <div className="col-sm ml-3">
                <div className="row justify-content-center">
                  <h2 className="forecast-day">
                    <span>Monday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(forecast.daily[0].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="forecast-icon"
                    src={`https://openweathermap.org/img/wn/${forecast.daily[0].weather[0].icon}@2x.png`}
                    alt={forecast.daily[0].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
              <div className="row justify-content-center">
                  <h2 className="forecast-day">
                    <span>Tuesday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(forecast.daily[0].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="forecast-icon"
                    src={`https://openweathermap.org/img/wn/${forecast.daily[1].weather[0].icon}@2x.png`}
                    alt={forecast.daily[0].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
              <div className="row justify-content-center">
                  <h2 className="forecast-day">
                    <span>Wednesday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(forecast.daily[0].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="forecast-icon"
                    src={`https://openweathermap.org/img/wn/${forecast.daily[2].weather[0].icon}@2x.png`}
                    alt={forecast.daily[0].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
              <div className="row justify-content-center">
                  <h2 className="forecast-day">
                    <span>Thursday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(forecast.daily[0].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="forecast-icon"
                    src={`https://openweathermap.org/img/wn/${forecast.daily[3].weather[0].icon}@2x.png`}
                    alt={forecast.daily[0].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
              <div className="row justify-content-center">
                  <h2 className="forecast-day">
                    <span>Friday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(forecast.daily[0].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="forecast-icon"
                    src={`https://openweathermap.org/img/wn/${forecast.daily[4].weather[0].icon}@2x.png`}
                    alt={forecast.daily[0].weather[0].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
