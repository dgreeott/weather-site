import React, { Component } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar/Navbar";
import WeatherApp from "./WeatherApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Helmet bodyAttributes={{ style: "background-color : #ffffff" }} />
          <Switch>
            <Route path={"/"} exact>
              <WeatherApp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
