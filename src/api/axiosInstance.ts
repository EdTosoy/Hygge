import axios from "axios";
import { USER_INFO } from "src/constants";

// Create an Axios instance with default options
const axiosInstance = axios.create({
  withCredentials: true,
 baseURL: "https://hygge-backend-production.up.railway.app"
});


// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem(USER_INFO);
    if (userInfo) {
      const { token } = JSON.parse(userInfo); // Extract the token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };