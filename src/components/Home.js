import React, { Component } from "react";
import "../css/App.css";

import Denver from "./Denver";
import Longmont from "./Longmont";
import Evergreen from "./Evergreen";
import Portland from './Portland';
import Boulder from './Boulder';

export const CityItems = [
  {
    id: "1",
    city: <Denver />,
  },
  {
    id: "2",
    city: <Longmont />,
  },
  {
    id: "3",
    city: <Evergreen />,
  },
  {
    id: "4",
    city: <Portland />,
  },
  {
    id: "5",
    city: <Boulder />,
  },
];

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid jusitfy-content-center">
          <div className="row m-5">
            <div className="col-sm">
              <h1 className="text-light">Our Weather App</h1>
            </div>
          </div>
          <div className="row m-2">
            {CityItems.map((item, index) => {
              return (
                <div className="col-sm-4 mb-4">
                  <div className="card" key={index}>
                    <div className="card-body" id={CityItems.id}>
                      {item.city}
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
