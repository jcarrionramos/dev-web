import axios from "axios";
import { getCookie } from "../helpers/cookies";

const customAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

customAxiosInstance.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";
delete customAxiosInstance.defaults.headers.common["X-Requested-With"];
customAxiosInstance.defaults.headers.common["Cache-Control"] = "no-cache";
customAxiosInstance.defaults.headers.common.Pragma = "no-cache";
customAxiosInstance.defaults.headers.common["If-Modified-Since"] = "0";
customAxiosInstance.defaults.headers.get = {
  "Cache-Control": "no-cache",
};

customAxiosInstance.interceptors.request.use(
  (config) => {
    const jwt = getCookie(process.env.REAC_APP_JWT_KEY);

    if (jwt) {
      config.headers["Authorization"] = `Bearer ${jwt}`;
    } else {
      // no está autenticado, se podría agregar un redirect al login
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { customAxiosInstance as http };
