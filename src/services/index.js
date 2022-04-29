import { instance } from 'common/api.service';

export const controller = new AbortController();
instance.interceptors.request.use((config) => {
  config.signal = controller.signal;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error.response;
  }
);
export default instance;
