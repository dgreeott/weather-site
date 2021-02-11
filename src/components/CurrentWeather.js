import React from "react";

import "../css/App.css";

const DailyForecast = (props) => {
  return (
    <>
      {props.weather.main && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-9 weather">
              <div className="row">
                <h2 className="col-sm weather-name">
                  <span>{props.weather.name}</span>
                </h2>
              </div>
              <div className="row">
                <div className="col-sm text-start">
                  <div className="row weather-temp">
                    {Math.round(props.weather.main.temp)}&deg;
                  </div>
                  <div className="row mt-3">
                    <h5>{props.weather.weather[0].description}</h5>
                  </div>
                  
                </div>
                <div className="col-sm">
                  <div className="row justify-content-end">
                    <img
                      className="weather-icon"
                      src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                      alt={props.weather.weather[0].description}
                    />
                  </div>
                  <div className="row justify-content-end">
                    <h4>
                      {Math.round(props.weather.main.temp_max)}&deg; /{" "}
                      {Math.round(props.weather.main.temp_min)}&deg;
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DailyForecast;
