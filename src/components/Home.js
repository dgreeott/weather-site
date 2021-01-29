import React, { Component } from "react";
import "../css/App.css";
import Denver from "./Denver";
import Longmont from "./Longmont";
import Evergreen from "./Evergreen";

export const CityItems = [
  {
    city: <Denver />,
  },
  {
    city: <Longmont />,
  },
  {
    city: <Evergreen />,
  },
];

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid jusitfy-content-center">
          <div className="row m-5">
            <div className="col-sm">
              <h1>Weather App</h1>
            </div>
          </div>
          <div className="row m-2">
            {CityItems.map((item, index) => {
              return (
                <div className="col-sm">
                  <div class="card" key={index}>
                    <div class="card-body">
                      <p class="card-text"></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
