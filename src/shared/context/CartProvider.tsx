import { type PropsWithChildren } from "react";

import { CartContext } from "./CartDefinition";
import { useCartState } from "./useCartState";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const { cartCount, setCartCount } = useCartState();

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
