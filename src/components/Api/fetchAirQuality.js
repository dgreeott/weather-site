import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/air_pollution/forecast';
const API_KEY_FORECAST = process.env.REACT_APP_FORECAST_API_KEY;

export const fetchAirQuality = async (lat, lon) => {
    const { data } = await axios.get(URL, {
        params: {
            lat: lat,
            lon: lon,
            units: 'imperial',
            APPID: API_KEY_FORECAST,
        }
    })
    .catch(function (error) {
        console.clear();
      });

    return data;
}
