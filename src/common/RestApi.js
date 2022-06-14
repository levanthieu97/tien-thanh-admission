import axios from "axios";

const defautRequest = {
  baseURL: '/'
}

const defaultRestApi = axios.create(defautRequest);

defaultRestApi.interceptors.request.use(function (config) {
  config.params = {
    '_': new Date().getTime(),
  };
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default defaultRestApi;