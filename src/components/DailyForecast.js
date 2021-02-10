import React from "react";

import "../css/App.css";

const DailyForecast = props => {    
  
  return (
    <>
      {props.forecast.daily && (
        <div className="dailyForecast mt-5">
          <div className="dailyForecast-temp">
            <div className="row">
              <div className="col-sm ml-3">
                <div className="row justify-content-center">
                  <h2 className="dailyForecast-day">
                    <span>Monday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[0].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="dailyForecast-icon"
                    src={`https://openweathermap.org/img/wn/${props.forecast.daily[0].weather[0].icon}@2x.png`}
                    alt={props.forecast.daily[0].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
                <div className="row justify-content-center">
                  <h2 className="dailyForecast-day">
                    <span>Tuesday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[1].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="dailyForecast-icon"
                    src={`https://openweathermap.org/img/wn/${props.forecast.daily[1].weather[0].icon}@2x.png`}
                    alt={props.forecast.daily[1].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
                <div className="row justify-content-center">
                  <h2 className="dailyForecast-day">
                    <span>Wednesday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[2].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="dailyForecast-icon"
                    src={`https://openweathermap.org/img/wn/${props.forecast.daily[2].weather[0].icon}@2x.png`}
                    alt={props.forecast.daily[2].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
                <div className="row justify-content-center">
                  <h2 className="dailyForecast-day">
                    <span>Thursday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[3].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="dailyForecast-icon"
                    src={`https://openweathermap.org/img/wn/${props.forecast.daily[3].weather[0].icon}@2x.png`}
                    alt={props.forecast.daily[3].weather[0].description}
                  />
                </div>
              </div>
              <div className="col-sm ml-3">
                <div className="row justify-content-center">
                  <h2 className="dailyForecast-day">
                    <span>Friday</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[4].temp.day)}&deg;
                </div>
                <div classname="row justify-content-center">
                  <img
                    className="dailyForecast-icon"
                    src={`https://openweathermap.org/img/wn/${props.forecast.daily[4].weather[0].icon}@2x.png`}
                    alt={props.forecast.daily[4].weather[0].description}
                  />
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
