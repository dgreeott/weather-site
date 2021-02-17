import React from "react";
import moment from "moment";

const airQuality = (props) => {
  return (
    <>
      {props.airQuality.list && (
        <div className="container mt-3">
          <div className="row covidInfo">
            <div className="row justify-content-center">
              <div className="col-sm">
                <h4>Air Quality</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <h2>{props.airQuality.list[0].main.aqi}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default airQuality;
