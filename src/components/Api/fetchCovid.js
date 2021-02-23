import axios from 'axios';

const URL = 'https://covidtracking.com/api/states';

export const fetchCovid = async (query) => {
    const { data } = await axios.get(URL);

    return data;
}
