import React from "react";

import "../css/App.css";

const WeatherToday = (props) => {
  return (
    <>
      {props.weatherToday.main && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-9 weatherToday">
              <div className="row">
                <h3 className="col-sm weatherToday-name mb-3">
                  <span>Weather Today in {props.weatherToday.name}</span>
                </h3>
              </div>

              <div className="row">
                <div className="col-sm-3 justify-content-center">
                  <div className="row weatherToday-temp justify-content-center">
                    {Math.round(props.weatherToday.main.feels_like)}&deg;
                  </div>
                  <div className="row justify-content-center">
                    <h6>Feels Like</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm justify-content-start">
                      <h4>High/Low</h4>
                    </div>
                    <div className="col-sm justify-content-end">
                      <h4 className="justify-content-end">
                        {Math.round(props.weatherToday.main.temp_max)}&deg; /{" "}
                        {Math.round(props.weatherToday.main.temp_min)}&deg;
                      </h4>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                  <div className="col-sm justify-content-start">
                      <h4>Humidity</h4>
                    </div>
                    <div className="col-sm justify-content-end">
                      <h4 className="justify-content-end">
                        {Math.round(props.weatherToday.main.humidity)}%
                      </h4>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row"></div>
                  <hr></hr>
                  <div className="row"></div>
                </div>
                <div className="col-sm">
                  <hr></hr>
                  <div className="row"></div>
                  <hr></hr>
                  <div className="row"></div>
                  <hr></hr>
                  <div className="row"></div>
                  <hr></hr>
                  <div className="row"></div>
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

export default WeatherToday;
