import React, { useState, useEffect } from "react";
import './WeatherCard.css'
import { getWeatherData } from "../WeatherInfo/WeatherInfo";
const WeatherCard = ({city, click}) => {
    const [weatherdata, setWeatherData] = useState(null);
    
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
        <div className="kaart" onClick={click}>
          
        <h2 className="title" onClick={click}>Het Weer</h2>
        {weatherdata !== null ? (
          <div className="main-container" onClick={click}>
            <h2 className="title" onClick={click}>  <h3>{weatherdata.name} </h3>
            </h2><img className="logoi" src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}></img>
             <div className="temp"> 
              <h4>{weatherdata.main.temp}&deg;C</h4>
           
           
            
            </div>
            <div className="location">
             
            </div>
            <div className="temp-range">
              <h6>
               <div> Min: {weatherdata.main.temp_min}&deg;C</div> <div> Max:{" "}
                {weatherdata.main.temp_max}&deg;C</div>  Humidity:{" "}
                {weatherdata.main.humidity}%
              </h6>
            </div>
          </div>
        ) : null}
      </div>
    )
}
export default WeatherCard;