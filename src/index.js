import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import "./css/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import 'popper.js/dist/umd/popper.js';
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
