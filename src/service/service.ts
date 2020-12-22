import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8000/api", //Mude para a url do seu backend
});

export default service;
