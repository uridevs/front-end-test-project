import { Link } from "react-router-dom";

export const Header = () => {
  // const { cartCount } = useCart(); // TODO:
  const cartCount = 0;

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
      <span>Cart: ({cartCount})</span>
    </header>
  );
};
