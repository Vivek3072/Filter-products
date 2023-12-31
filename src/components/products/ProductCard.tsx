import { useState } from "react";
import { Products } from "../../api/interfaces/Products";
import "./ProductCard.scss";
import Stars from "../utils/Stars";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ProductModal from "./ProductModal";

interface Product { product: Products }

const ProductCard: React.FC<Product> = ({ product }) => {
  const [isBouncing, setIsBouncing] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [liked, setLiked] = useState<boolean>(false);
  const toggleLike = () => {
    if (!isBouncing) {
      setIsBouncing(true);
      setTimeout(() => {
        setIsBouncing(false);
      }, 100);
    }
    setLiked(!liked);
  };

  return (
    <>
      <div className="product-card">
        <div className="image-wrapper">
          <button
            className={`like-button ${liked ? "liked" : ""} ${isBouncing && "bounce"}`}
            onClick={toggleLike}
          >
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <div className="image_div">
            <img className="image" src={product.image} alt="" />
          </div>
          <div className="sheet">
            <div className="sheet_content" onClick={() => toggleModal()}>View Product</div>
          </div>
        </div>
        <div className="detail-wrapper">
          <p className="title">{product.title}</p>
          <div className="price-wrapper">
            <p className="previous-price">
              {"Rs." + (parseInt(product.price) + 800).toString()}
            </p>
            <p className="price">{"Rs." + product.price}</p>
          </div>
          <div className="rating-wrapper">
            <Stars rating={product.rating as any} isSelected={false} />
            <span className="ratings-count">
              {"(" + product.ratingCount + ")"}
            </span>
          </div>
        </div>
      </div>
      {isModalOpen &&
        <ProductModal
          isModalOpen={isModalOpen}
          handleModal={toggleModal}
          product={product}
        />
      }
    </>
  );
};

export default ProductCard;
