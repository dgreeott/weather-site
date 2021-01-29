import React, { Component } from "react";
import "../css/App.css";

const API_Key = process.env.REACT_APP_WEATHER_API_KEY;

export default class Denver extends Component {
  state = {
    loading: true,
    city: null,
  };

  async componentDidMount() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=${API_Key}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ city: data, loading: false });
    console.log(data);
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          {this.state.loading || !this.state.city ? (
            <div>Loading...</div>
          ) : (
            <div className="containter">
              <div>
                <h1>{this.state.city.name}</h1>
              </div>
              <div>
                <h2>Temp: {this.state.city.main.temp}&#176;</h2>
              </div>
              <div>
                <div>
                  <h3>
                    Min: {this.state.city.main.temp_min}&#176; | Min:{" "}
                    {this.state.city.main.temp_max}&#176;
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
