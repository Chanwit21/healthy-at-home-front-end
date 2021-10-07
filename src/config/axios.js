import axios from 'axios';
import { getToken, removeToken } from '../service/localStorage';
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

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = 'http://localhost:3000/loginpage';
    }
    return Promise.reject(error);
  }
);

export default axios;
