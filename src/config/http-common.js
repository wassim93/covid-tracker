import axios from "axios";
import { BASE_URL } from "../constants";
const instance = axios.create({
  baseURL: BASE_URL,
  header: {
    "Content-type": "application/json",
  },
});

export default instance;
