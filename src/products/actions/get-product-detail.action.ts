import { itemsApi } from "../../shared/api/items.api";
import { type ProductDetail } from "../interfaces/product.interface";

export const getProductDetail = async (id: string): Promise<ProductDetail> => {

  const response = await itemsApi.get<ProductDetail>(`/api/product/${id}`);
  return response.data;
};