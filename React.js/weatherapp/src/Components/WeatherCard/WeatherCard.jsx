import React, { useState, useEffect } from "react";
import "./WeatherCard.css";
import { getWeatherData } from "../WeatherInfo/WeatherInfo";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

const WeatherCard = ({ city, click }) => {
  const [weatherdata, setWeatherData] = useState(null);
  const [toggleState, setToggleState] = useState("off");
  function toggle() {
    setToggleState(toggleState === "off" ? "null" : "off");
  }
  console.log(toggle);

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
    <div>
      <div className="kaart" onClick={toggle}>
        <h2 className="title" onClick={click}>
          Het Weer
        </h2>
        {weatherdata !== null ? (
          <div className="main-container" onClick={click}>
            <h2 className="title" onClick={click}>
              {" "}
              <h3>{weatherdata.name} </h3>
            </h2>
            <img
              className="logoi"
              src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}
            ></img>
            <div className="temp">
              <h4>{weatherdata.main.temp}&deg;C</h4>
            </div>
            <div className="location"></div>
            <div className="temp-range">
              <h6>
                <div> Min: {weatherdata.main.temp_min}&deg;C</div>{" "}
                <div> Max: {weatherdata.main.temp_max}&deg;C</div> Humidity:{" "}
                {weatherdata.main.humidity}%
              </h6>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        {toggleState === "off" ? null : (
          <WeatherDetail
            lat={weatherdata.coord.lat}
            lon={weatherdata.coord.lon}
            name={weatherdata.name}
          />
        )}
      </div>
    </div>
  );
};
export default WeatherCard;
