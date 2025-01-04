import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6776d28812a55a9a7d0cf7bf.mockapi.io/api/fintech",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});

export default axiosInstance;
