import React from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";


const App = () => {
  return (
    <div className="App">
      <WeatherCard city="colombia" />
      <WeatherCard city="miami" />
    </div>
  );
};
export default App;