import React from "react";

const TodayForecast = (props) => {
  return (
    <>
      {props.todayForecast.daily && (
        <div className="container mt-3">
          <div className="row todayForecast">
            <div className="col-sm">
              <div className="row mt-3">
                <div className="col-sm todayForecast-name mb-3">
                  <h3>Today's Forecast</h3>
                </div>
              </div>
              <div className="row todayForecast-temp mb-3">
                <div className="col-sm-3">
                  <div className="row justify-content-center">
                    <h2 className="todayForecast-day">
                      <span>Morning</span>
                    </h2>
                  </div>
                  <div className="row justify-content-center">
                    {Math.round(props.todayForecast.daily[0].temp.morn)}&deg;
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row justify-content-center">
                    <h2 className="todayForecast-day">
                      <span>Afternoon</span>
                    </h2>
                  </div>
                  <div className="row justify-content-center">
                    {Math.round(props.todayForecast.daily[1].temp.day)}&deg;
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row justify-content-center">
                    <h2 className="todayForecast-day">
                      <span>Evening</span>
                    </h2>
                  </div>
                  <div className="row justify-content-center">
                    {Math.round(props.todayForecast.daily[1].temp.eve)}&deg;
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row justify-content-center">
                    <h2 className="todayForecast-day">
                      <span>Night</span>
                    </h2>
                  </div>
                  <div className="row justify-content-center">
                    {Math.round(props.todayForecast.daily[2].temp.night)}&deg;
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

export default TodayForecast;
