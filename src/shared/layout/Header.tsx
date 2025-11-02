import { Link } from "react-router-dom";

import { Smartphone, ShoppingCart, X } from "lucide-react";

import { useCart } from "../context/useCart";
import { Breadcrumbs } from "./Breadcrumbs";

export const Header = () => {
  const { cartCount, setCartCount } = useCart();

  const handleResetCart = () => {
    const isConfirmed = window.confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    );
    if (isConfirmed) {
      setCartCount(0);
    }
  };

  return (
    <header className="app-header">
      <Link to="/" className="header-title">
        <Smartphone size={24} />
        <span style={{ marginLeft: "8px" }}>MobileShop</span>
      </Link>

      <Breadcrumbs />

      <div className="cart-container">
        <ShoppingCart size={24} />
        <span>({cartCount})</span>

        {cartCount > 0 && (
          <button
            className="reset-cart-btn"
            onClick={handleResetCart}
            title="Vaciar carrito"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </header>
  );
};
