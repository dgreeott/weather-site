import React from "react";

import "../css/App.css";

const DailyForecast = (props) => {
  return (
    <>
      {props.dailyForecast.daily && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-9 dailyForecast">
              <div className="row">
                <div className="col-sm dailyForecast-name mb-3">
                  <h3>Daily Forecast</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="dailyForecast-day">
                      <span>Monday</span>
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp">
                    {Math.round(props.dailyForecast.daily[0].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[0].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[0].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="dailyForecast-day">
                      <span>Tuesday</span>
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp">
                    {Math.round(props.dailyForecast.daily[1].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[1].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[1].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="dailyForecast-day">
                      <span>Wednesday</span>
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp">
                    {Math.round(props.dailyForecast.daily[2].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[2].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[2].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="dailyForecast-day">
                      <span>Thursday</span>
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp">
                    {Math.round(props.dailyForecast.daily[3].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[3].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[3].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row dailyForecast-section">
                    <h2 className="dailyForecast-day">
                      <span>Friday</span>
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp">
                    {Math.round(props.dailyForecast.daily[4].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[4].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[4].weather[0].description}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <button className="btn btn-primary">Next 8 Days</button>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      )}
    </>
  );
};

export default DailyForecast;
