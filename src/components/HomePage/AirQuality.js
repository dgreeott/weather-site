import React from "react";
/*import moment from "moment";*/

const AirQuality = (props) => {

  return (
    <>
      {props.airQuality.list && (
        <div className="container mt-3">
          <div className="row covidInfo">
            <div className="col-sm">
              <div className="row text-center">
                <div className="col-sm mb-3">
                  <h3>Air Quality</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm text-center">
                  <h2>{props.airQuality.list[0].main.aqi}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AirQuality;
