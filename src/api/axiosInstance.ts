import axios from "axios";

// Create an Axios instance with default options
export const axiosInstance = axios.create({
  withCredentials: true,
});
