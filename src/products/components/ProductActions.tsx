import { type FC } from "react";
import { type ProductDetail } from "../interfaces/product.interface";

interface Props {
  product: ProductDetail;
}

export const ProductActions: FC<Props> = ({ product }) => {
  const { colors, storages } = product.options;

  return (
    <div className="product-actions">
      <h3>Seleccionar:</h3>

      <div>
        <label>Almacenamiento:</label>
        <select>
          {storages.map((storage) => (
            <option key={storage.code} value={storage.code}>
              {storage.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Color:</label>
        <select>
          {colors.map((color) => (
            <option key={color.code} value={color.code}>
              {color.name}
            </option>
          ))}
        </select>
      </div>

      <button className="add-to-cart-btn">Añadir a la cesta</button>
    </div>
  );
};
