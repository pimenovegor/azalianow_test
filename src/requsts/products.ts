import Axios from "axios";
import { Http } from "./http";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { count: number; rate: number };
};

export const getAllProducts = async () => {
  try {
    const response = await Http.get("/products");
    return response.data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log(`GET: ${error.response?.status}`);
    }
    return null;
  }
};
