import React from "react";
import moment from "moment";

import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsArrowsCollapse } from "react-icons/bs";

const WeatherToday = (props) => {
  return (
    <>
      {props.weatherToday.daily &&
        props.weatherName.main &&
        props.airQuality.list && (
          <div className="container mt-3">
            <div className="row weatherToday">
              <div className="col-sm ">
                <div className="row ">
                  <div className="col-sm">
                    <h3 className="weatherToday-name mb-3">
                      <span>
                        Weather Today in {props.weatherName.name},{" "}
                        {props.weatherName.sys.country}
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-8">
                    <div className="row weatherToday-temp ml-3">
                      <div className="col-sm">
                        {Math.round(props.weatherToday.current.feels_like)}&deg;
                      </div>
                      <div className="col-sm">
                        {props.airQuality.list[0].main.aqi}
                      </div>
                    </div>
                    <div className="row ml-2">
                      <div className="col-sm">
                        <h6>Feels Like</h6>
                      </div>
                      <div className="col-sm mr-4">
                        <h6>Air Quality</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 justify-content-end mt-5">
                    <div className="row">
                      <div className="col-sm-6">
                        <h6>
                          <FiIcons.FiSunrise size={20} />{" "}
                          {moment
                            .unix(props.weatherToday.current.sunrise)
                            .tz(props.weatherToday.timezone)
                            .format("LT")}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <h6>
                          <FiIcons.FiSunset size={20} />{" "}
                          {moment
                            .unix(props.weatherToday.current.sunset)
                            .tz(props.weatherToday.timezone)
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
                          {Math.round(props.weatherToday.daily[0].temp.max)}
                          &deg;/
                          {Math.round(props.weatherToday.daily[0].temp.min)}
                          &deg;
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
                        <h4>
                          {Math.round(props.weatherToday.current.humidity)}%
                        </h4>
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
                        <h4>
                          {Math.round(props.weatherToday.current.wind_speed)}{" "}
                          mph
                        </h4>
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
                          {(props.weatherToday.current.pressure * 0.03).toFixed(
                            2
                          )}{" "}
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
