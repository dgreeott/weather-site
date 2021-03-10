import axios from 'axios';

const URL = 'https://corona.lmao.ninja/v2/states?sort=&yesterday=';

export const fetchCovid = async () => {
    const { data } = await axios.get(URL);

    return data;
}
