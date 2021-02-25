import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import { CovidStateData } from "./CovidStateData";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { fetchCovid } from "../Api/fetchCovid";

am4core.useTheme(am4themes_animated);

class CovidMap extends Component {
  componentDidMount() {
    console.log(fetchCovid());
    let map = am4core.create("chartdiv", am4maps.MapChart);

    map.geodata = am4geodata_usaLow;

    map.projection = new am4maps.projections.AlbersUsa();

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    map.series.push(polygonSeries);

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonSeries.calculateVisualCenter = true;
    polygonSeries.mapPolygons.template.tooltipPosition = "fixed";

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#232323");

    // Creating the layout of the tooltip
    polygonTemplate.tooltipHTML =
      "<h1>{name}</h1><h4>Active Cases: {value}</h4>";

    //Excluding Objects
    polygonSeries.exclude = ["CA", "MX", "RU", "BS"];

    // In-line Data
    polygonSeries.data = CovidStateData;

    

    polygonSeries.mapPolygons.template.events.on("hit", function (ev) {
      let chart = ev.target.series.chart;
      chart.zoomToMapObject(ev.target);
    });

    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: am4core.color("#ffffff"),
      max: am4core.color("#AAAA00"),
      logarithmic: true,
    });
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid m-5">
          <div className="row text-center">
            <div className="col-sm">
              <h1>Coronavirus (COVID-19)</h1>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm">
              <div id="chartdiv"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CovidMap;
