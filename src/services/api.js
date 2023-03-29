import axios from "axios";

const api = axios.create({
  baseURL: "https://expressgrafos.onrender.com/",
});

export default api;