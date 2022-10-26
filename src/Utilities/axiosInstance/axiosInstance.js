import axios from "axios";

// const api = "http://localhost:5000/api/";
const api = "https://fierce-hollows-32758.herokuapp.com/api/";
const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    authorization: `${localStorage.getItem("authorization")}`,
  },
});

export default axiosInstance;
