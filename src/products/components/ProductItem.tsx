import { type FC } from "react";
import { Link } from "react-router-dom";
import { type Product } from "../interfaces/product.interface";

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const { id, brand, model, price, imgUrl } = product;

  return (
    <Link to={`/product/${id}`} className="product-item">
      <img
        src={imgUrl}
        alt={`${brand} ${model}`}
        className="product-item-img"
      />
      <div className="product-item-info">
        <strong>
          {brand} - {model}
        </strong>
        {price ? <span>{price} €</span> : <span>No disponible</span>}
      </div>
    </Link>
  );
};
