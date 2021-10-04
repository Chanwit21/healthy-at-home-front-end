import axios from 'axios';
import { getToken } from '../service/localStorage';
import { API } from './env';

axios.defaults.baseURL = API;

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
