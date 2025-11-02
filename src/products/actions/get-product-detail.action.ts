import { itemsApi } from "../../shared/api/items.api";
import { type ProductDetail } from "../interfaces/product.interface";
import { getCache, setCache } from "../../shared/services/cache.service";

export const getProductDetail = async (id: string): Promise<ProductDetail> => {
  const PRODUCT_DETAIL_CACHE_KEY = `product_detail_${id}`;

  const cachedDetail = getCache<ProductDetail>(PRODUCT_DETAIL_CACHE_KEY);
  if (cachedDetail) {
    return cachedDetail;
  }

  const response = await itemsApi.get<ProductDetail>(`/api/product/${id}`);
  
  setCache(PRODUCT_DETAIL_CACHE_KEY, response.data);
  
  return response.data;
};