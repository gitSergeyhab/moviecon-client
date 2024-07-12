import { request } from ".";

const url = "/products/";
const getUrl = (path: string) => `${url}${path}`;

export const getProducts = async () => {
  const response = await request.get(url);
  return response.data;
};

export const getMyProducts = async () => {
  const response = await request.get(getUrl("my/"));
  return response.data;
};

export const createProduct = async (name: string) => {
  const response = await request.post(url, { name });
  return response.data;
};
