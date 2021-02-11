import React from "react";

import "../css/App.css";

const HourlyForecast = (props) => {
  return (
    <>
      {props.hourlyForecast.hourly && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-9 hourlyForecast">
              <div className="row">
                <div className="col-sm hourlyForecast-name mb-3">
                  <h3>Hourly Forecast</h3>
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
