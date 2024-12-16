import URLS from '../constant/URLS';
import config from '../config';
import axios from 'axios';

const getRefreshToken = async (data) => {
    return await axios.post(`${config.baseApiUrl}${URLS.USER.REFRESH_TOKEN}`, data);
};

export default getRefreshToken;
