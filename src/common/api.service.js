import axios from 'axios';
import store from 'store';
import { setLoading } from 'actions/common.action';

const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use((config) => {
  if (!config.notLoading) {
    store.dispatch(setLoading(true));
  }
  return config;
});

apiService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error.response;
  }
);

export default apiService;
