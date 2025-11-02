import { type FC, useState, useEffect, useMemo } from "react";
import { getProducts } from "../../products/actions/get-products.action";
import { type Product } from "../../products/interfaces/product.interface";
import { ProductItem } from "../../products/components/ProductItem";
import { SearchBar } from "../../shared/components/SearchBar";

export const ProductListPage: FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const productList = await getProducts();
        setAllProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const filteredProducts = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (!lowerCaseSearch) {
      return allProducts;
    }

    return allProducts.filter((product) => {
      const brand = product.brand.toLowerCase();
      const model = product.model.toLowerCase();
      return brand.includes(lowerCaseSearch) || model.includes(lowerCaseSearch);
    });
  }, [allProducts, searchTerm]);

  return (
    <section>
      <div className="plp-header">
        <h2>Móviles Disponibles</h2>
        <SearchBar
          placeholder="Buscar por marca o modelo..."
          onSearchChange={setSearchTerm}
        />
      </div>

      <hr />

      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No se encontraron productos que coincidan con la búsqueda.</p>
          )}
        </div>
      )}
    </section>
  );
};
