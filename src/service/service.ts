import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8080/api",
  params: { populate: "1", token: process.env.REACT_APP_API_TOKEN },
});

export default service;
