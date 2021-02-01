import React, { Component } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Helmet bodyAttributes={{ style: "background-color : #296d98" }} />
          <Switch>
            <Route path={"/"} exact>
              <Navbar />
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
