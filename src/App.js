import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
        </a>{" "}
        (c) 2025 Uday Dhengre
        {" "}
        <a target="_blank" href="https://github.com/UdaYdhengre/WeatherApp/tree/main">
        
        </a>{" "}
        {" "}
      </div>
    </React.Fragment>
  );
}

export default App;
