import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="app-header">
      {/* link a main */}
      <Link to="/" className="header-title">
        Technology Shop
      </Link>

      <div>
        {/* Breadcrumb*/}
        <span>...</span>
      </div>

      {/* items counter */}
      <span>Carrito: ({cartCount})</span>
    </header>
  );
};
