import Axios from "axios";

export const Http = Axios.create({
  baseURL: "https://fakestoreapi.com",
});
