import React from "react";
import moment from "moment";

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
                    <h2 className="dailyForecast-day ml-3">
                      {moment.unix(props.dailyForecast.daily[0].dt).format('dddd')}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp ml-2">
                    {Math.round(props.dailyForecast.daily[0].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon ml-3"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[0].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[0].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="dailyForecast-day ml-2">
                      {moment.unix(props.dailyForecast.daily[1].dt).format('dddd')}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp ml-2">
                    {Math.round(props.dailyForecast.daily[1].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon ml-3"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[1].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[1].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="dailyForecast-day">
                      {moment.unix(props.dailyForecast.daily[2].dt).format('dddd')}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp ml-2">
                    {Math.round(props.dailyForecast.daily[2].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon ml-3"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[2].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[2].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row">
                    <h2 className="dailyForecast-day ml-2">
                      {moment.unix(props.dailyForecast.daily[3].dt).format('dddd')}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp ml-2">
                    {Math.round(props.dailyForecast.daily[3].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon ml-3"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[3].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[3].weather[0].description}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="row dailyForecast-section">
                    <h2 className="dailyForecast-day ml-4">
                      {moment.unix(props.dailyForecast.daily[4].dt).format('dddd')}
                    </h2>
                  </div>
                  <div className="row dailyForecast-temp ml-2">
                    {Math.round(props.dailyForecast.daily[4].temp.day)}&deg;
                  </div>
                  <div className="row">
                    <img
                      className="dailyForecast-icon ml-3"
                      src={`https://openweathermap.org/img/wn/${props.dailyForecast.daily[4].weather[0].icon}@2x.png`}
                      alt={props.dailyForecast.daily[4].weather[0].description}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <button className="btn btn-primary">Next 7 Days</button>
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
