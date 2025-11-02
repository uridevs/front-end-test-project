import { type FC } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Breadcrumbs: FC = () => {
  const location = useLocation();
  const isProductPage = location.pathname.includes("/product/");

  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      <Link to="/">Home</Link>

      {isProductPage && (
        <span className="breadcrumb-item">
          <ChevronRight size={16} />
          <span>Producto</span>
        </span>
      )}
    </nav>
  );
};
