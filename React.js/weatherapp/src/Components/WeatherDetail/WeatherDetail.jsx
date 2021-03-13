import React, { useState, useEffect } from "react";
import { getWeatherDetail } from "../WeatherInfo/WeatherDetail_Info";
import "./WeatherDetail.css";
const WeatherDetail = () => {
  const [weatherdetail, setWeatherDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const getDetail = async () => {
    try {
      const detail = await getWeatherDetail();
      setWeatherDetail(detail);
      console.log(detail);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="weatherDetail">
      {weatherdetail !== null ? (
        <div>Hey</div>
      ) : null}
    </div>
  );
};
export default WeatherDetail;