import React, { Component } from "react";
import "../css/App.css";

export default class Denver extends Component {
  state = {
    loading: true,
    city: null,
  };

  async componentDidMount() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=9988e46978e6f97c7ef21c5e1ed201da&units=imperial";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ city: data, loading: false });
  }

  render() {
    return (
      <>
      <div>
        {this.state.loading || !this.state.city ? (
          <div>Loading...</div>
        ) : (
          <div className="containter">
            <div>
              <h1>{this.state.city.name}</h1>
            </div>
            <div>
              <h2>Temp:{" "}{this.state.city.main.temp}&#8457;</h2>
            </div>
            <div>
              <div><h3>Min:{" "}{this.state.city.main.temp_min}&#8457; | Min:{" "}{this.state.city.main.temp_max}&#8457;</h3></div>
            </div>
          </div>
        )}
      </div>
      </>
    );
  }
}
