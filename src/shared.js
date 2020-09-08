import axios from 'axios';
import { COVID } from './config.js';

export default function fetchData(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${COVID}/${endpoint}`,
        data: body
    }).catch(error => {
        console.log(error);
    });
};
