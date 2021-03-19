import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/onecall?";
const apiKey = "";
const units = "&units=metric";
// const lat = "52.3676";
// const lon = "4.9041";
const part = "";
export const getWeatherData = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      baseUrl + `lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}${units}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};