import React from "react";

import "../css/App.css";

const DailyForecast = (props) => {
  return (
    <>
      {props.weather.main && (
        <div className="weather m-5">
          <div className="row">
            <h2 className="weather-name">
              <span>{props.weather.name}</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-md">
              <div className="row weather-temp">
                {Math.round(props.weather.main.temp)}&deg;
              </div>
              <div className="row">
                <h5>{props.weather.weather[0].description}</h5>
              </div>
            </div>
            <div className="col-md weather-info">
              <div className="row">
                <img
                  className="weather-icon"
                  src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                  alt={props.weather.weather[0].description}
                />
              </div>
              <div className="row">
                <h5>
                  {Math.round(props.weather.main.temp_max)} /{" "}
                  {Math.round(props.weather.main.temp_min)}
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DailyForecast;
