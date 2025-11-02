import { itemsApi } from "../../shared/api/items.api";
import { type AddToCartPayload, type AddToCartResponse } from "../interfaces/cart.interface";

export const addToCart = async (payload: AddToCartPayload): Promise<AddToCartResponse> => {
  
  const response = await itemsApi.post<AddToCartResponse>(
    '/api/cart',
    payload,
  );

  return response.data;
};