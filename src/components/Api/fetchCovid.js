
import axios from 'axios';

const URL = 'https://api.covidtracking.com/v1/states/current.json';

export const fetchCovid = async (state) => {
    const { dataCovid } = await axios.get(URL)
    .catch(function (error) {
        console.clear();
      });
    
    return dataCovid;
}

