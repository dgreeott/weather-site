import React from "react";
import moment from "moment";

const DailyForecast = (props) => {
  return (
    <>
      {props.dailyForecast.daily && (
        <div className="container mt-3">
          <div className="row dailyForecast">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm-3.5 dailyForecast-name">
                  <h3>Daily Forecast</h3>
                </div>
                <div className="col-sm">
                  <button className="btn btn-dark">Next 7 Days</button>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-2 dailyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="dailyForecast-day">Today</h2>
                  </div>
                  <div className="row dailyForecast-temp justify-content-center">
                    {Math.round(props.dailyForecast.daily[0].temp.day)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[0].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[0].weather[0].description}
                    />
                  </div>
                  <div className="row dailyForecast-text justify-content-center">
                    {props.dailyForecast.daily[0].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 dailyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="dailyForecast-day">
                      {moment
                        .unix(props.dailyForecast.daily[1].dt)
                        .format("dddd")}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp justify-content-center">
                    {Math.round(props.dailyForecast.daily[1].temp.day)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[1].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[1].weather[0].description}
                    />
                  </div>
                  <div className="row dailyForecast-text justify-content-center">
                    {props.dailyForecast.daily[1].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 dailyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="dailyForecast-day">
                      {moment
                        .unix(props.dailyForecast.daily[2].dt)
                        .format("dddd")}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp justify-content-center">
                    {Math.round(props.dailyForecast.daily[2].temp.day)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[2].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[2].weather[0].description}
                    />
                  </div>
                  <div className="row dailyForecast-text justify-content-center">
                    {props.dailyForecast.daily[2].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 dailyForecast-card m-3 p-5">
                  <div className="row justify-content-center">
                    <h2 className="dailyForecast-day">
                      {moment
                        .unix(props.dailyForecast.daily[3].dt)
                        .format("dddd")}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp justify-content-center">
                    {Math.round(props.dailyForecast.daily[3].temp.day)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[3].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[3].weather[0].description}
                    />
                  </div>
                  <div className="row dailyForecast-text justify-content-center">
                    {props.dailyForecast.daily[3].weather[0].description}
                  </div>
                </div>
                <div className="col-sm-2 dailyForecast-card m-3 p-5">
                  <div className="row dailyForecast-section justify-content-center">
                    <h2 className="dailyForecast-day">
                      {moment
                        .unix(props.dailyForecast.daily[4].dt)
                        .format("dddd")}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp justify-content-center">
                    {Math.round(props.dailyForecast.daily[4].temp.day)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[4].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[4].weather[0].description}
                    />
                  </div>
                  <div className="row dailyForecast-text justify-content-center">
                    {props.dailyForecast.daily[4].weather[0].description}
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

export default DailyForecast;
