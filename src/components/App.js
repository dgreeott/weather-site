import React, { Component } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import WeatherApp from "./WeatherApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Helmet bodyAttributes={{ style: "background-image: linear-gradient(#296d98, #d2b48c);" }} />
          <Switch>
            <Route path={"/"} exact>
              <WeatherApp />
            </Route>
            <Route path={"/hourly"} exact>
              <WeatherApp />
            </Route>
            <Route path={"/5day"} exact>
              <WeatherApp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
