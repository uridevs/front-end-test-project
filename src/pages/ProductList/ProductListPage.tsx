import { type FC, useState, useEffect } from "react";
import { getProducts } from "../../products/actions/get-products.action";
import { type Product } from "../../products/interfaces/product.interface";
import { ProductItem } from "../../products/components/ProductItem";

export const ProductListPage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <section>
      <h2>Móviles Disponibles</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>
      <hr />

      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list-grid">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
