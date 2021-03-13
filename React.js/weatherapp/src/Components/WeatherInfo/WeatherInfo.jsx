import axios from "axios";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "5f99a06f0bd14bddff41d108039b7641";
const units = '&units=metric'
export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}${units}`);
    return data;
  } catch (error) {
    throw error;
  }
};
// https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
// https://openweathermap.org/weather-conditions