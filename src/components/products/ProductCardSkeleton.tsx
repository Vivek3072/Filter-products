import "./ProductCardSkeleton.scss";

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="product-card-skeleton">
      <div className="image" />
      <p className="title_1" />
      <p className="price" />
      <p className="stars" />
    </div>
  );
};

export default ProductCardSkeleton;
