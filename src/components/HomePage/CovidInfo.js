import React from "react";
/*import moment from "moment";*/

const covidInfo = (props) => {
  return (
    <>
      {props.covidInfo.daily && (
        <div className="container mt-3">
          <div className="row covidInfo">
            <div className="col-sm text-center">
            <h4>Track Coronavirus</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default covidInfo;
