import { type FC } from "react";
import { type ProductDetail } from "../interfaces/product.interface";

interface Props {
  product: ProductDetail;
}

export const ProductDescription: FC<Props> = ({ product }) => {
  return (
    <div className="product-description">
      <h3>Descripción</h3>
      <ul>
        <li>
          <strong>Marca:</strong> {product.brand}
        </li>
        <li>
          <strong>Modelo:</strong> {product.model}
        </li>
        <li>
          <strong>Precio:</strong>{" "}
          {product.price ? `${product.price} €` : "N/A"}
        </li>
        <li>
          <strong>CPU:</strong> {product.cpu}
        </li>
        <li>
          <strong>RAM:</strong> {product.ram}
        </li>
        <li>
          <strong>SO:</strong> {product.os}
        </li>
        <li>
          <strong>Resolución:</strong> {product.displayResolution}
        </li>
        <li>
          <strong>Batería:</strong> {product.battery}
        </li>
        <li>
          <strong>Dimensiones:</strong> {product.dimentions}
        </li>
        <li>
          <strong>Peso:</strong> {product.weight}g
        </li>
      </ul>
    </div>
  );
};
