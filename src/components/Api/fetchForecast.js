import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/forecast/hourly?';
const API_KEY = process.env.REACT_APP_FORECAST_API_KEY;

export const fetchForecast = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

    return data;
}
