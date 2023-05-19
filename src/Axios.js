import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  //     "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
  //   },
});

// Axios.defaults.headers.common["X-RapidAPI-Key"] = process.env.REACT_APP_API_KEY;
// Axios.defaults.headers.common["X-RapidAPI-Host"] =
//   process.env.REACT_APP_API_HOST;
