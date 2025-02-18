import React, { Component } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async";

import WeatherApp from "./WeatherApp";
import CovidMap from "./CovidPage/CovidAmChart";

class App extends Component {
  render() {
    return (
      <HelmetProvider>
      <div className="App">
        <Router>
          <Helmet
            bodyAttributes={{
              style: "background-image: linear-gradient(#296d98, #d2b48c);",
            }}
          />
          <Switch>
            <Route path={"/"} exact>
              <WeatherApp />
            </Route>
            <Route path={"/hourly"}>
              <WeatherApp />
            </Route>
            <Route path={"/5day"}>
              <WeatherApp />
            </Route>
            <Route path={"/covid"}>
              <CovidMap />
            </Route>
          </Switch>
        </Router>
      </div>
      </HelmetProvider>
    );
  }
}

export default App;
