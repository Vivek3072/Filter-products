import React, { useState } from "react";
import { Products } from "../../api/interfaces/Products";
import "./ProductModal.scss";

interface Props {
    isModalOpen: boolean;
    handleModal: React.MouseEventHandler<HTMLButtonElement>;
    product: Products;
}

const ProductModal: React.FC<Props> = ({ isModalOpen, handleModal, product }) => {
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setOrderPlaced(true);
        setTimeout(() => {
            setOrderPlaced(false);
            handleModal(event);
        }, 2000);
    };


    return (
        <>
            {isModalOpen && (
                <div className="modal-wrapper">
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal_image">
                                <img src={product?.image} alt="productimage" />
                            </div>
                            <div>{product?.title}</div>
                            <div className="price">
                                <div className="previous-price">
                                    {"Rs." + (parseInt(product.price) + 800).toString()}
                                </div>
                                <div className="price-wrapper">{"Rs." + product?.price}</div>
                            </div>
                            {!orderPlaced ?
                                <button
                                    className={`buy-button`}
                                    onClick={handlePlaceOrder}
                                    disabled={orderPlaced}
                                >
                                    Place Order
                                </button> :
                                <button
                                    className={`order-button`}
                                    disabled={orderPlaced}
                                >
                                    Order Placed ✔
                                </button>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductModal;
