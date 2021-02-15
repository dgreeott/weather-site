import React from "react";
import moment from "moment";

import "../css/App.css";

const HourlyForecast = (props) => {
  return (
    <>
      {props.hourlyForecast.hourly && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-9 hourlyForecast justify-content-start">
              <div className="row">
                <div className="col-sm hourlyForecast-name mb-3">
                  <h3>Hourly Forecast</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[0].dt)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp">
                    {Math.round(props.hourlyForecast.hourly[0].temp)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[0].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[0].weather[0].description
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[1].dt)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp">
                    {Math.round(props.hourlyForecast.hourly[1].temp)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[1].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[1].weather[0].description
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[2].dt)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp">
                    {Math.round(props.hourlyForecast.hourly[2].temp)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[2].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[2].weather[0].description
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[3].dt)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp">
                    {Math.round(props.hourlyForecast.hourly[3].temp)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[3].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[3].weather[0].description
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[4].dt)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp">
                    {Math.round(props.hourlyForecast.hourly[4].temp)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[4].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[4].weather[0].description
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <button className="btn btn-primary">Next 48 Hours</button>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default HourlyForecast;
