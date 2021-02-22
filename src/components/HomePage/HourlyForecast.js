import React from "react";
import moment from "moment-timezone";

const HourlyForecast = (props) => {
  return (
    <>
      {props.hourlyForecast.hourly && (
        <div className="container mt-3">
          <div className="row hourlyForecast">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm-3.5 hourlyForecast-name">
                  <h3>Hourly Forecast</h3>
                </div>
                <div className="col-sm">
                  <button className="btn btn-dark">Next 48 Hours</button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2 hourlyForecast-card m-3 p-5">
                  <div className="row justify-content-start">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[0].dt)
                          .tz(props.hourlyForecast.timezone)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp justify-content-center">
                    {Math.round(props.hourlyForecast.hourly[0].temp)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[0].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[0].weather[0].description
                      }
                    />
                  </div>
                  <div className="row hourlyForecast-text justify-content-center">
                    {props.hourlyForecast.hourly[0].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 hourlyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[1].dt)
                          .tz(props.hourlyForecast.timezone)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp justify-content-center">
                    {Math.round(props.hourlyForecast.hourly[1].temp)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[1].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[1].weather[0].description
                      }
                    />
                  </div>
                  <div className="row hourlyForecast-text justify-content-center">
                    {props.hourlyForecast.hourly[1].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 hourlyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[2].dt)
                          .tz(props.hourlyForecast.timezone)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp justify-content-center">
                    {Math.round(props.hourlyForecast.hourly[2].temp)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[2].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[2].weather[0].description
                      }
                    />
                  </div>
                  <div className="row hourlyForecast-text justify-content-center">
                    {props.hourlyForecast.hourly[2].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 hourlyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[3].dt)
                          .tz(props.hourlyForecast.timezone)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp justify-content-center">
                    {Math.round(props.hourlyForecast.hourly[3].temp)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[3].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[3].weather[0].description
                      }
                    />
                  </div>
                  <div className="row hourlyForecast-text justify-content-center">
                    {props.hourlyForecast.hourly[3].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 hourlyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="hourlyForecast-day">
                      <span>
                        {moment
                          .unix(props.hourlyForecast.hourly[4].dt)
                          .tz(props.hourlyForecast.timezone)
                          .format("LT")}
                      </span>
                    </h2>
                  </div>
                  <div className="row hourlyForecast-temp justify-content-center">
                    {Math.round(props.hourlyForecast.hourly[4].temp)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="hourlyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.hourlyForecast.hourly[4].weather[0].icon}@2x.png`}
                      alt={
                        props.hourlyForecast.hourly[4].weather[0].description
                      }
                    />
                  </div>
                  <div className="row hourlyForecast-text justify-content-center">
                    {props.hourlyForecast.hourly[4].weather[0].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HourlyForecast;
