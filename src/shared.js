import axios from 'axios';
import { COVID } from './config.js';

export default function fetchData(endpoint, method = 'GET', body){
    return axios({
        method: method,
        baseURL: COVID,
        url: `/${endpoint}`,
        data: body
    }).catch(error => {
        console.log(error);
    });
};
