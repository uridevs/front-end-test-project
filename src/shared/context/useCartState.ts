import { useState, useEffect } from "react";

const CART_COUNT_KEY = "itx_cart_count";

const getInitialCartCount = (): number => {
  const storedCount = localStorage.getItem(CART_COUNT_KEY);
  return storedCount ? parseInt(storedCount, 10) : 0;
};

export const useCartState = () => {
  const [cartCount, setCartCount] = useState<number>(getInitialCartCount);

  useEffect(() => {
    localStorage.setItem(CART_COUNT_KEY, cartCount.toString());
  }, [cartCount]);

  return { cartCount, setCartCount };
};