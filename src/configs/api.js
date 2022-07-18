import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  throw error;
});


export default axiosClient;