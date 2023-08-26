import useSeachResults from "../../hooks/useSearchResults";
import "./ProductsPanel.scss";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsPanel: React.FC = () => {
  const { products, loading } = useSeachResults();
  return (
    <div className="products_page">
      <div className="products-panel">
        {products && !loading
          ? products.map((product, index) => (
            <ProductCard
              key={product.id.toString() + index.toString()}
              product={product}
            />
          ))
          : Array(20)
            .fill("NaN")
            .map((e, index) => (
              <ProductCardSkeleton key={e.toString() + index} />
            ))}
      </div>
    </div>
  );
};

export default ProductsPanel;
