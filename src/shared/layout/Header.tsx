import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

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
        Technology Shop
      </Link>

      <div>
        <span>[LOGO]</span>
      </div>

      <div className="cart-container">
        <span>Carrito: ({cartCount})</span>

        {cartCount > 0 && (
          <button
            className="reset-cart-btn"
            onClick={handleResetCart}
            title="Vaciar carrito"
          >
            &times;
          </button>
        )}
      </div>
    </header>
  );
};
