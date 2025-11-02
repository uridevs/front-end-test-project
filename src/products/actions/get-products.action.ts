import { itemsApi } from "../../shared/api/items.api";
import { type Product } from "../interfaces/product.interface";
import { getCache, setCache } from "../../shared/services/cache.service";

const PRODUCTS_CACHE_KEY = 'products_list';

export const getProducts = async (): Promise<Product[]> => {
  
  const cachedProducts = getCache<Product[]>(PRODUCTS_CACHE_KEY);
  if (cachedProducts) {
    console.log("Datos de listado obtenidos desde la CACHÉ");
    return cachedProducts;
  }

  console.log("Datos de listado obtenidos desde la API");
  const response = await itemsApi.get<Product[]>('/api/product');
  
  setCache(PRODUCTS_CACHE_KEY, response.data);
  
  return response.data;
};