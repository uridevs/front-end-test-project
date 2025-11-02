import { type FC, useState } from "react";
import { type ProductDetail } from "../interfaces/product.interface";
import { addToCart } from "../../cart/actions/add-to-cart.action";
import { useCart } from "../../shared/context/useCart";

interface Props {
  product: ProductDetail;
}

export const ProductActions: FC<Props> = ({ product }) => {
  const { id, options, price } = product;
  const { colors, storages } = options;

  const [selectedStorage, setSelectedStorage] = useState<number>(
    storages[0]?.code
  );
  const [selectedColor, setSelectedColor] = useState<number>(colors[0]?.code);
  const [isAdding, setIsAdding] = useState(false);
  const isAvailable = !!price;

  const { setCartCount } = useCart();

  const handleAddToCart = async () => {
    if (!isAvailable) return;
    setIsAdding(true);
    try {
      const payload = {
        id: id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      };
      // La llamada a la api "falla" por CORS si añadimos {withCredentials: true} al post y siempre devuelve 1 si no lo enviamos, por lo que manejaremos manualmente el estado del contador del carrito
      await addToCart(payload);

      // incrementamos NUESTRO contador local en lugar de usar la respuesta
      // setCartCount(response.count);
      setCartCount((prevCount) => prevCount + 1);

      alert(`¡Producto añadido!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Hubo un error al añadir el producto.");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="product-actions">
      <h3>Acciones</h3>

      <div>
        <label>Almacenamiento:</label>
        <select
          value={selectedStorage}
          onChange={(e) => setSelectedStorage(Number(e.target.value))}
        >
          {storages.map((storage) => (
            <option key={storage.code} value={storage.code}>
              {storage.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Color:</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(Number(e.target.value))}
        >
          {colors.map((color) => (
            <option key={color.code} value={color.code}>
              {color.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        disabled={isAdding || !isAvailable}
      >
        {isAdding
          ? "Añadiendo..."
          : isAvailable
          ? "Añadir a la cesta"
          : "No disponible temporalmente"}
      </button>
    </div>
  );
};
