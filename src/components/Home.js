import React, { Component } from "react";
import "../css/App.css";
import Denver from "./Denver";
import Longmont from "./Longmont";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Denver />
          <Longmont />
        </div>
      </>
    );
  }
}
