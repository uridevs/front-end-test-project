import { type FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "../../products/actions/get-product-detail.action";
import { type ProductDetail } from "../../products/interfaces/product.interface";
import { ProductDescription } from "../../products/components/ProductDescription";
import { ProductActions } from "../../products/components/ProductActions";

export const ProductDetailPage: FC = () => {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const detail = await getProductDetail(id);
        setProduct(detail);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isLoading) {
    return <p>Cargando detalle del producto...</p>;
  }

  if (!product) {
    return (
      <p>
        Producto no encontrado. <Link to="/">Volver</Link>
      </p>
    );
  }

  return (
    <section>
      <Link to="/">&larr; Volver a la lista</Link>
      <h2>
        {product.brand} - {product.model}
      </h2>
      <hr />

      <div className="pdp-layout">
        {/* Imagen */}
        <div className="pdp-image-wrapper">
          <img
            src={product.imgUrl}
            alt={`${product.brand} ${product.model}`}
            className="pdp-image"
          />
        </div>

        {/* Detalles y actions */}
        <div className="pdp-info-wrapper">
          <ProductDescription product={product} />
          <ProductActions product={product} />
        </div>
      </div>
    </section>
  );
};
