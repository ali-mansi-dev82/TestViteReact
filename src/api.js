import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://software-lab.ir/");
  return response.data;
};
