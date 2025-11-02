import { createContext, type Dispatch, type SetStateAction } from "react";

export interface ICartContext {
  cartCount: number;
  setCartCount: Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);