import axios from 'axios';

import _config from '../_config';

import { store } from '../store/index';
import { resetAuth } from '../store/auth/auth-slice';


const BASE_URL = _config.API_IP;

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL
});

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return config;
}); 

$api.interceptors.response.use(config => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get(`${BASE_URL}/auth/refresh`, { withCredentials: true });
      localStorage.setItem('access_token', response.data.message);
      return $api.request(originalRequest);
    } catch (err) {
      localStorage.removeItem('access_token');
      store.dispatch(resetAuth());
    } 
  }
  throw new Error();
});

export default $api;
export { BASE_URL };