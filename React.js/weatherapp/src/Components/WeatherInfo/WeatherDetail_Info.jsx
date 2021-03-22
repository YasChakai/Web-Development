import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/onecall?";
const apiKey = "5f99a06f0bd14bddff41d108039b7641";
const units = "&units=metric";
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