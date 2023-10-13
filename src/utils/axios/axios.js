/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";

const BASE_URL = `http://143.244.142.0/api/v1/`;
// const BASE_URL = `http://inventab.io/api/v1/`;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axios private instance
export const axiosPrivateInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
