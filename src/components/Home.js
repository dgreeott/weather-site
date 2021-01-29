import React, { Component } from "react";
import "../css/App.css";
import Denver from "./Denver";
import Longmont from "./Longmont";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div classsName="col-sm">
              <Denver />
            </div>
            <div classsName="col-sm">
              <Longmont />
            </div>
          </div>
          
          
        </div>
      </>
    );
  }
}
