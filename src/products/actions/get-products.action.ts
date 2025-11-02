import { itemsApi } from "../../shared/api/items.api";
import { type Product } from '../interfaces/product.interface';

export const getProducts = async (): Promise<Product[]> => {

  const response = await itemsApi.get<Product[]>('/api/product');
  return response.data;
};
