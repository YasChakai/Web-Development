import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail";
const App = () => {
  const [toggleState, setToggleState] = useState("off");
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
  return (
    <div className="App">
      <div className="Weather_card">
        <WeatherCard city="Moscow" click={toggle} />
        <WeatherCard city="Zoetermeer" click={toggle} />
        {toggleState === "off" ? null : (
          <div className="Detail">
            <WeatherDetail lat='37.6173' lon='37.6173'/>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;