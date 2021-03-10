import axios from 'axios';

const URL = 'api.openweathermap.org/data/2.5/weather?q=';
const city = 'Zwijndrecht';
const API_KEY = '5f99a06f0bd14bddff41d108039b7641';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
            city: 'Zwijndrecht',
        }
    });

    return data;
}



