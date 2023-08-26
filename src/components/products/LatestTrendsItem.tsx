import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Products } from "../../api/interfaces/Products";
import "./LatestTrends.scss";

interface Prods { product: Products }

const LatestTrendsItem: React.FC<Prods> = ({ product }) => {
    return (
        <Link className="latest-trends-item" to={`/${product.title}`}>
            <div>
                <img src={product.image} alt="" />
                <div className="sheet">
                    <FaSearch className="sheet_icon" />
                </div>
            </div>
            <p className="latest-trends-item_title">{product.title}</p>
        </Link>
    );
};

export default LatestTrendsItem;
