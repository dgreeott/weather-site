import React from "react";

import "../css/App.css";

const TodayForecast = (props) => {
  return (
    <>
      {props.forecast.daily && (
        <div className="todayForecast mt-5">
          <div className="todayForecast-temp">
            <div className="row todayForecast-row justify-content-center">
              <div className="col-xs-3 m-4">
                <div className="row">
                  <h2 className="todayForecast-day">
                    <span>Morning</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[0].temp.morn)}&deg;
                </div>
              </div>
              <div className="col-xs-3 m-4">
                <div className="row">
                  <h2 className="todayForecast-day">
                    <span>Evening</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[1].temp.eve)}&deg;
                </div>
              </div>
              <div className="col-xs-3 m-4">
                <div className="row">
                  <h2 className="todayForecast-day">
                    <span>Night</span>
                  </h2>
                </div>
                <div className="row justify-content-center">
                  {Math.round(props.forecast.daily[2].temp.night)}&deg;
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
                <button className="btn btn-primary ">Next Hours</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodayForecast;
