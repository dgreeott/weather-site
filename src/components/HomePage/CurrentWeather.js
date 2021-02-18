import React from "react";
import moment from "moment";

const CurrentWeather = (props) => {
  return (
    <>
      {props.weather.current && props.weatherName.main && (
        <div className="container mt-3">
          <div className="row weather">
            <div className="col-sm">
              <div className="row">
                <h2 className="col-sm weather-name">
                  <span>{props.weatherName.name}</span>
                </h2>
              </div>
              <div className="row ml-4">
                <h6>As of {moment.unix(props.weather.current.dt).tz(props.weather.timezone).format("ha z")}</h6>
              </div>
              <div className="row">
                <div className="col-sm justify-content-center">
                  <div className="row weather-temp">
                    {Math.round(props.weather.current.temp)}&deg;
                  </div>
                  <div className="row mt-3 ml-3">
                    <h5>{props.weather.current.weather[0].description}</h5>
                  </div>
                </div>
                <div className="col-sm justify-content-center">
                  <div className="row justify-content-end">
                    <img
                      className="weather-icon justify-content-center"
                      src={`https://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`}
                      alt={props.weather.current.weather[0].description}
                    />
                  </div>
                  <div className="row justify-content-end mr-2">
                    <h4>
                      {Math.round(props.weather.daily[0].temp.max)}&deg; /{" "}
                      {Math.round(props.weather.daily[0].temp.min)}&deg;
                    </h4>
                  </div>
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

export default CurrentWeather;
