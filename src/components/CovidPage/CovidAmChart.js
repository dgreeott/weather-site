import React, { useState } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";

import Navbar from "../Navbar/Navbar";

import { fetchCovid } from "../Api/fetchCovid";

const CovidMap = () => {
  const [value, setValue] = useState({});

  const positiveCovid = async (e) => {
    if (e.key === "Enter") {
      const dataPositive = await fetchCovid();

      setValue(dataPositive);
    }
  };

  let map = am4core.create("chartdiv", am4maps.MapChart);

  map.geodata = am4geodata_usaLow;

  map.projection = new am4maps.projections.AlbersUsa();

  let polygonSeries = new am4maps.MapPolygonSeries();
  polygonSeries.useGeodata = true;
  map.series.push(polygonSeries);

  // Configure series
  let polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}";
  polygonTemplate.fill = am4core.color("#1F2540");

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;

  // Create hover state and set alternative fill color
  let hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#fff");

  //Excluding Objects
  polygonSeries.exclude = ["CA", "MX", "RU", "BS"];

  // In-line Data
  polygonTemplate.tooltipText = "{name}: {value}";

  polygonSeries.data = [
    {
      id: "US-CA",
      name: "CALIFORNIA",
      value: 100,
    },
    {
      id: "US-AL",
      name: "France",
      value: 500,
    },
  ];

  polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: am4core.color("#ffffff"),
    max: am4core.color("#AAAA00"),
    logarithmic: true,
  });

  return (
    <div className="main-container mb-5">
      <Navbar />
      <div className="container-fluid m-5">
        <div className="row text-center">
          <div className="col-sm ">
            <div id="chartdiv"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidMap;
