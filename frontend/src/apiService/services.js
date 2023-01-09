import axios from "axios";

export default axios.create({
  // for prod
  baseURL: process.env.NODE_ENV == 'development' ?'http://localhost:3030/api/v1' : "https://events-api-oncel.herokuapp.com/api/v1",

  // for development
  // baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});
