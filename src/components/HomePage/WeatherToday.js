import React from "react";
import moment from "moment";

import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsArrowsCollapse } from "react-icons/bs";

const WeatherToday = (props) => {
  return (
    <>
      {props.weatherToday.main && (
        <div className="container mt-3">
          <div className="row weatherToday">
            <div className="col-sm ">
              <div className="row ">
                <h3 className="col-sm weatherToday-name mb-3">
                  <span>
                    Weather Today in {props.weatherToday.name},{" "}
                    {props.weatherToday.sys.country}
                  </span>
                </h3>
              </div>

              <div className="row">
                <div className="col-sm-8">
                  <div className="row weatherToday-temp ml-3">
                    {Math.round(props.weatherToday.main.feels_like)}&deg;
                  </div>
                  <div className="row ml-2">
                    <h6>Feels Like</h6>
                  </div>
                </div>
                <div className="col-sm-4 justify-content-end mt-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>
                        <FiIcons.FiSunrise size={20} />{" "}
                        {moment
                          .unix(props.weatherToday.sys.sunrise)
                          .format("LT")}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>
                        <FiIcons.FiSunset size={20} />{" "}
                        {moment
                          .unix(props.weatherToday.sys.sunset)
                          .format("LT")}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-8">
                      <h4>
                        <FaIcons.FaTemperatureHigh size={20} /> High/Low
                      </h4>
                    </div>
                    <div className="col-sm-4">
                      <h4>
                        {Math.round(props.weatherToday.main.temp_max)}&deg;/
                        {Math.round(props.weatherToday.main.temp_min)}&deg;
                      </h4>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-8">
                      <h4>
                        <WiHumidity size={20} /> Humidity
                      </h4>
                    </div>
                    <div className="col-sm-4">
                      <h4>{Math.round(props.weatherToday.main.humidity)}%</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-8">
                      <h4>
                        <FaIcons.FaWind size={20} /> Wind
                      </h4>
                    </div>
                    <div className="col-sm-4">
                      <h4>{Math.round(props.weatherToday.wind.speed)} mph</h4>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-8">
                      <h4>
                        <BsArrowsCollapse size={20} /> Pressure
                      </h4>
                    </div>
                    <div className="col-sm-4">
                      <h4>
                        {(props.weatherToday.main.pressure * 0.03).toFixed(2)}{" "}
                        in
                      </h4>
                    </div>
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

export default WeatherToday;
