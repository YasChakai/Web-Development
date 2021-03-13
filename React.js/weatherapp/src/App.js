
import React, { useState, useEffect } from "react";
import "./App.css";
import { getWeatherData } from "./Components/WeatherInfo/WeatherInfo";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherDetail from "./Components/WeatherDetail/WeatherDetail"

const App = () => {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("zwijndrecht");
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <WeatherCard city="Rotterdam" />
      <WeatherCard city="Zwijndrecht" />
     
      <WeatherDetail />
    </div>
  );
};
export default App;
