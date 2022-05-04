import axios from 'axios';

const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use((config) => {
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
